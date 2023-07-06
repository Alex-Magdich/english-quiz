import React from 'react';
import AnswerButton from './items/AnswerButton';
import HelpComponent from './items/HelpComponent';
import { selectRandomWord, setClassName, sleep } from '../../helpers';
import WordComponent from './items/WordComponent';
import { StAnswerContainer, StQuizContainer, StTimeline } from './styled';
import ToggleFavorite from '../favorites/items/ToggleFavorite';
import { TState } from '../../types';

type TProps = {
    state: TState;
    setState: (state: (prevState: TState) => TState) => void;
    sayWord: () => void;
};

const Quiz: React.FC<TProps> = ({ state, setState, sayWord }) => {
    const {
        word,
        answers,
        translate,
        example,
        selected,
        variants,
        currentLevel,
        favorites,
    } = state;

    const setSelected = (word: string) => setState(prevState => ({ ...prevState, selected: word }));

    React.useEffect(() => {
        setState(prevState => ({ ...prevState, ...selectRandomWord(currentLevel, variants) }));
    }, [variants]);

    const getNext = async () => {
        sleep(2000).then(() => {
            setState(prevState => ({
                ...prevState,
                selected: '',
                ...selectRandomWord(currentLevel, variants),
            }));
        });
    };

    const isFavorite = !!favorites.find(item => item.english === word);

    const handleToggleFavorites = () => {
        const currentItem = {
            english: word,
            ukrainian: translate,
            example,
        };

        if (isFavorite) {
            setState(prevState => ({ ...prevState,
                favorites: [...prevState.favorites.filter(item => item.english !== word)],
            }));
        } else {
            setState(prevState => ({ ...prevState,
                favorites: [...prevState.favorites, currentItem],
            }));
        }
    };

    return (
        <StQuizContainer>
            <ToggleFavorite isFavorite={isFavorite} toggleFavorite={handleToggleFavorites}/>
            <WordComponent sayWord={sayWord} word={word}/>
            <StTimeline $animated={!!selected}/>
            <StAnswerContainer>
                {answers.map(word => (
                    <AnswerButton
                        key={word}
                        className={setClassName(word, selected, translate)}
                        disabled={!!selected}
                        getNext={getNext}
                        onClick={setSelected}
                        word={word}
                    />
                ))}
            </StAnswerContainer>
            <HelpComponent example={example} sayWord={sayWord} word={word}/>
            {/*<StQuizHelp>*/}
            {/*    <span>Натисни на фразу або слово з такою позначкою - </span>*/}
            {/*    <AiFillSound/>*/}
            {/*    <span> щоб прослухати вимову</span>*/}
            {/*</StQuizHelp>*/}
        </StQuizContainer>
    );
};

export default Quiz;

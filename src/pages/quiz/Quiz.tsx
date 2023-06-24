import React from 'react';
import AnswerButton from "./items/AnswerButton";
import HelpComponent from "./items/HelpComponent";
import {selectRandomWord, setClassName, sleep} from "../../helpers";
import WordComponent from "./items/WordComponent";
import {TState} from "../../App";
import {StAnswerContainer, StQuizContainer, StQuizHelp, StTimeline} from "./styled";
import {AiFillSound} from "react-icons/ai";
import ToggleFavorite from "../favorites/items/ToggleFavorite";

type TProps = {
    state: TState;
    setState: (state: (prevState: TState) => TState) => void;
    sayWord: () => void;
}

const Quiz:React.FC<TProps> = ({state, setState, sayWord}) => {
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

    const setSelected = (word: string) => setState(prevState => ({...prevState, selected: word,}))

    React.useEffect(() => {
        setState(prevState => ({...prevState, ...selectRandomWord(currentLevel, variants)}));
    },[variants])

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
        const currentItem =  {
            english: word,
            ukrainian: translate,
            example,
        }
        if (isFavorite) {
            setState(prevState => ({...prevState,
                favorites: [...prevState.favorites.filter(item=> item.english !== word)]
            }));
        } else{
            setState(prevState => ({...prevState,
                favorites: [...prevState.favorites, currentItem]
            }));
        }
    }


    return(
        <StQuizContainer>
            <ToggleFavorite toggleFavorite={handleToggleFavorites} isFavorite={isFavorite}/>
            <WordComponent word={word} sayWord={sayWord}/>
            <StTimeline $animated={!!selected}/>
            <StAnswerContainer>
                {answers.map(word =>(
                    <AnswerButton
                        key={word}
                        disabled={!!selected}
                        word={word}
                        onClick={setSelected}
                        className={setClassName(word, selected, translate)}
                        getNext={getNext}
                    />
                ))}
            </StAnswerContainer>
            <HelpComponent example={example} word={word} sayWord={sayWord}/>
            {/*<StQuizHelp>*/}
            {/*    <span>Натисни на фразу або слово з такою позначкою - </span>*/}
            {/*    <AiFillSound/>*/}
            {/*    <span> щоб прослухати вимову</span>*/}
            {/*</StQuizHelp>*/}
        </StQuizContainer>
    );
}

export default Quiz;

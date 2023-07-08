import React from 'react';
import AnswerButton from './items/AnswerButton';
import HelpComponent from './items/HelpComponent';
import { setClassName } from '../../helpers';
import WordComponent from './items/WordComponent';
import { StAnswerContainer, StQuizContainer, StTimeline } from './styled';
import ToggleFavorite from '../favorites/items/ToggleFavorite';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Quiz: React.FC = () => {
    const {
        word,
        answers,
        translate,
        example,
        selected,
        favorites,
    } = useTypedSelector(state => state.app);

    const { addToFavorites, removeFromFavorites } = useActions();
    const isFavorite = !!favorites.find(item => item.english === word);

    const handleToggleFavorites = () => {
        const currentItem = {
            english: word,
            ukrainian: translate,
            example,
        };

        if (isFavorite) {
            removeFromFavorites(word);
        } else {
            addToFavorites(currentItem);
        }
    };

    return (
        <StQuizContainer>
            <ToggleFavorite isFavorite={isFavorite} toggleFavorite={handleToggleFavorites}/>
            <WordComponent/>
            <StTimeline $animated={!!selected}/>
            <StAnswerContainer>
                {answers.map(word => (
                    <AnswerButton
                        key={word}
                        className={setClassName(word, selected, translate)}
                        disabled={!!selected}
                        word={word}
                    />
                ))}
            </StAnswerContainer>
            <HelpComponent/>
        </StQuizContainer>
    );
};

export default Quiz;

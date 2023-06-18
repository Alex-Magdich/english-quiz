import React from 'react';
import {StAnswerButton} from "../styled";

type TProps = {
    word: string;
    onClick: (word: string) => void;
    className: string;
    getNext: () => void;
    disabled: boolean;
}

const AnswerButton:React.FC<TProps> = ({word, onClick, className, getNext, disabled}) => {
    const handleClick = () => {
        onClick(word);
        getNext();
    };
    return (
        <StAnswerButton
            disabled={disabled}
            className={className}
            onClick={handleClick}
        >
            {word}
        </StAnswerButton>
    )
}

export default AnswerButton;
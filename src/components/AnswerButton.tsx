import React from 'react';

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
        <button
            disabled={disabled}
            className={className}
            onClick={handleClick}
        >
            {word}
        </button>
    )
}

export default AnswerButton;
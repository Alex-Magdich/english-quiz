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
    const [isClicked, setIsClicked] = React.useState(false);

    React.useEffect(()=>{
        setIsClicked(false);
    },[])

    const handleClick = () => {
        onClick(word);
        setIsClicked(true);
        getNext();
    };
    return (
        <StAnswerButton
            disabled={disabled}
            className={className}
            onClick={handleClick}
            $isClicked={isClicked}
        >
            {word}
        </StAnswerButton>
    )
}

export default AnswerButton;
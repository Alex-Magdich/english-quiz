import React from 'react';
import { StAnswerButton } from '../styled';
import { useActions } from '../../../hooks/useActions';

type TProps = {
    word: string;
    className: string;
    disabled: boolean;
};

const AnswerButton: React.FC<TProps> = ({ word, className, disabled }) => {
    const [isClicked, setIsClicked] = React.useState(false);
    const { setAnswer, getNextWord } = useActions();

    React.useEffect(() => {
        setIsClicked(false);
    }, []);

    const handleClick = () => {
        setAnswer(word);
        setIsClicked(true);
        getNextWord();
    };

    return (
        <StAnswerButton
            $isClicked={isClicked}
            className={className}
            disabled={disabled}
            onClick={handleClick}
        >
            {word}
        </StAnswerButton>
    );
};

export default AnswerButton;

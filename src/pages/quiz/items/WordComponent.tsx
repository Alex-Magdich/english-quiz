import React from 'react';
import { AiFillSound } from 'react-icons/ai';
import { StWordComponent } from '../styled';

type TProps = {
    word: string;
    sayWord: (word: string) => void;
};

const WordComponent: React.FC<TProps> = ({ word, sayWord }) => {
    const handleSay = () => sayWord(word);

    return (
        <StWordComponent>
            <span onClick={handleSay}>{word}</span>
            <AiFillSound/>
        </StWordComponent>
    );
};

export default WordComponent;

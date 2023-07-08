import React from 'react';
import { AiFillSound } from 'react-icons/ai';
import { StWordComponent } from '../styled';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const WordComponent: React.FC = () => {
    const { word } = useTypedSelector(state => state.app);

    return (
        <StWordComponent>
            <span>{word}</span>
            <AiFillSound/>
        </StWordComponent>
    );
};

export default WordComponent;

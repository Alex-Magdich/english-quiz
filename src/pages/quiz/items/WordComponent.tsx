import React from 'react';
import { StWordComponent } from '../styled';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const WordComponent: React.FC = () => {
    const { word } = useTypedSelector(state => state.app);

    return (
        <StWordComponent>
            <span>{word}</span>
        </StWordComponent>
    );
};

export default WordComponent;

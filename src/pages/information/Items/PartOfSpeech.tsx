import React from 'react';
import { getPartOfSpeech } from '../../../helpers';
import { StPartOfSpeech } from '../styled';

type TProps = {
    name: string;
};

const PartOfSpeech: React.FC<TProps> = ({ name }) => {
    return (
        <StPartOfSpeech>
            <span>Частина мови: </span>
            <span>{getPartOfSpeech(name)}</span>
        </StPartOfSpeech>
    );
};

export default PartOfSpeech;

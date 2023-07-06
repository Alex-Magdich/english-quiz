import React from 'react';
import { StSelect } from '../styled';

type TProps = {
    setVoice: (value: number) => void;
    voices: Array<SpeechSynthesisVoice>;
    selectedVoice: number;
};

const VoiceSelect: React.FC<TProps> = ({ setVoice, voices, selectedVoice }) => {
    const onOptionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setVoice(Number(event.target.value));
    };

    return (
        <StSelect onChange={onOptionChangeHandler} value={selectedVoice}>
            {voices.map((voice, index) => (
                <option key={index} value={index}>
                    {/*{voice.name} ({voice.lang}) {voice.default && ' [Default]'}*/}
                    {voice.name}
                </option>
            ))}
        </StSelect>
    );
};

export default VoiceSelect;

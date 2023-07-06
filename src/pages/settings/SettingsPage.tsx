import React from 'react';
import { StSettingsPage } from './styled';
import SettingChoices from './Items/SettingChoices';
import VoiceSelect from './Items/VoiceSelect';
import ChangeLevel from './Items/ChangeLevel';
import { LEVEL } from '../../enums';

export type TProps = {
    variants: number;
    setVariants: (value: number) => void;
    voices: Array<SpeechSynthesisVoice>;
    setVoice: (index: number) => void;
    selectedVoice: number;
    level: LEVEL;
    setLevel: (level: LEVEL) => void;
};

const SettingsPage: React.FC<TProps> = ({
    variants,
    setVariants,
    voices,
    setVoice,
    selectedVoice,
    level,
    setLevel,
}) => {
    return (
        <StSettingsPage>
            <h1>Налаштування</h1>
            <SettingChoices onChange={setVariants} variants={variants}/>

            <ChangeLevel level={level} setLevel={setLevel}/>

            <h3>Голос озвучки</h3>
            <VoiceSelect selectedVoice={selectedVoice} setVoice={setVoice} voices={voices}/>
        </StSettingsPage>
    );
};

export default SettingsPage;

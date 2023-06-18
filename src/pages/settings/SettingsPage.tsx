import React from 'react';
import {StSettingsPage} from "./styled";
import SettingChoices from "./Items/SettingChoices";
import VoiceSelect from "./Items/VoiceSelect";
import ChangeLevel from "./Items/ChangeLevel";
import {LEVEL} from "../../App";

export type TProps = {
    variants: number;
    setVariants: (value: number) => void;
    voices: SpeechSynthesisVoice[],
    setVoice: (index: number) => void;
    selectedVoice: number;
    level: LEVEL;
    setLevel: (level: LEVEL) => void;
}

const SettingsPage:React.FC<TProps>= ({
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
            <h2>Налаштування</h2>
            <SettingChoices onChange={setVariants} variants={variants}/>
            <h3>Голос озвучки</h3>
            <VoiceSelect setVoice={setVoice} voices={voices} selectedVoice={selectedVoice}/>
            <ChangeLevel level={level} setLevel={setLevel}/>
        </StSettingsPage>
    );
};

export default SettingsPage;
import React from 'react';
import { MdQuiz, MdSettings } from 'react-icons/md';
import { LuFolderHeart } from 'react-icons/lu';
import { StFooter } from './styled';
import SettingButton from '../components/SettingButton';
import { APP_STATE } from '../enums';

type TProps = {
    setAppState: (setAppState: APP_STATE) => void;
    currentAppState: APP_STATE;
};

const Footer: React.FC<TProps> = ({ setAppState, currentAppState }) => {
    const handleOpenQuiz = () => setAppState(APP_STATE.QUIZ);
    const handleOpenSettings = () => setAppState(APP_STATE.SETTINGS);
    const handleOpenFavorite = () => setAppState(APP_STATE.FAVORITES);

    const isSettings = currentAppState === APP_STATE.SETTINGS;

    return (
        <StFooter>
            <SettingButton icon={<MdQuiz/>} isActive={currentAppState === APP_STATE.QUIZ} onClick={handleOpenQuiz}/>
            <SettingButton
                icon={<LuFolderHeart/>}
                isActive={currentAppState === APP_STATE.FAVORITES}
                isFavoriteBtn
                onClick={handleOpenFavorite}
            />
            <SettingButton icon={<MdSettings/>} isActive={isSettings} onClick={handleOpenSettings}/>
        </StFooter>
    );
};

export default Footer;

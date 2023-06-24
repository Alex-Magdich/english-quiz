import React from 'react';
import {StFooter, StWhereClick} from "./styled";
import {MdQuiz, MdSettings} from 'react-icons/md';
import SettingButton from "../components/SettingButton";
import {APP_STATE} from "../App";
import {AiOutlineArrowDown} from 'react-icons/ai';
import {LuFolderHeart} from 'react-icons/lu';

type TProps = {
    setAppState: (setAppState: APP_STATE) => void;
    currentAppState: APP_STATE;
}

const Footer:React.FC<TProps> = ({setAppState,currentAppState }) => {
    const handleOpenQuiz = () => setAppState(APP_STATE.QUIZ);
    const handleOpenSettings = () => setAppState(APP_STATE.SETTINGS);
    const handleOpenFavorite = () => setAppState(APP_STATE.FAVORITES);

    const isSettings = currentAppState === APP_STATE.SETTINGS;

    return (
        <StFooter>
            <SettingButton icon={<MdQuiz/>} onClick={handleOpenQuiz} isActive={currentAppState === APP_STATE.QUIZ}/>
            <SettingButton
                icon={<LuFolderHeart/>}
                onClick={handleOpenFavorite}
                isActive={currentAppState === APP_STATE.FAVORITES}
                isFavoriteBtn
            />
            <SettingButton icon={<MdSettings/>} onClick={handleOpenSettings} isActive={isSettings}/>
        </StFooter>
    );
};

export default Footer;
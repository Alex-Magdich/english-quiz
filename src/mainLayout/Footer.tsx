import React from 'react';
import {StFooter, StWhereClick} from "./styled";
import {MdQuiz, MdSettings} from 'react-icons/md';
import SettingButton from "../pages/settings/Items/SettingButton";
import {APP_STATE} from "../App";
import {AiOutlineArrowDown} from 'react-icons/ai';

type TProps = {
    setAppState: (setAppState: APP_STATE) => void;
    currentAppState: APP_STATE;
}

const Footer:React.FC<TProps> = ({setAppState,currentAppState }) => {
    const handleOpenQuiz = () => setAppState(APP_STATE.QUIZ);
    const handleOpenSettings = () => setAppState(APP_STATE.SETTINGS);

    const isSettings = currentAppState === APP_STATE.SETTINGS;

    return (
        <StFooter>
            {isSettings && <StWhereClick>Повернутися до <br/>вивчення слів <AiOutlineArrowDown/></StWhereClick>}
            <SettingButton icon={<MdQuiz/>} onClick={handleOpenQuiz} isActive={currentAppState === APP_STATE.QUIZ}/>
            <SettingButton icon={<MdSettings/>} onClick={handleOpenSettings} isActive={isSettings}/>
        </StFooter>
    );
};

export default Footer;
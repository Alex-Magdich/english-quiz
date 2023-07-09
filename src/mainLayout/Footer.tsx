import React from 'react';
import { MdInfoOutline, MdQuiz, MdSettings } from 'react-icons/md';
import { LuFolderHeart } from 'react-icons/lu';
import { StFooter } from './styled';
import SettingButton from '../components/SettingButton';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PAGES } from '../enums';

const Footer: React.FC = () => {
    const { setActivePage } = useActions();
    const activePage = useTypedSelector(state => state.app.activePage);
    const handleOpenQuiz = () => setActivePage(PAGES.QUIZ);
    const handleOpenSettings = () => setActivePage(PAGES.SETTINGS);
    const handleOpenFavorite = () => setActivePage(PAGES.FAVORITES);
    const handleOpenInfo = () => setActivePage(PAGES.INFO);

    const isSettings = activePage === PAGES.SETTINGS;
    const isQuiz = activePage === PAGES.QUIZ;
    const isFavorite = activePage === PAGES.FAVORITES;
    const isInfo = activePage === PAGES.INFO;

    return (
        <StFooter>
            <SettingButton icon={<MdQuiz/>} isActive={isQuiz} onClick={handleOpenQuiz}/>
            <SettingButton icon={<MdInfoOutline/>} isActive={isInfo} onClick={handleOpenInfo}/>
            <SettingButton
                icon={<LuFolderHeart/>}
                isActive={isFavorite}
                isFavoriteBtn
                onClick={handleOpenFavorite}
            />
            <SettingButton icon={<MdSettings/>} isActive={isSettings} onClick={handleOpenSettings}/>
        </StFooter>
    );
};

export default Footer;

import React from 'react';
import { StSettingsPage } from './styled';
import SettingChoices from './Items/SettingChoices';
import ChangeLevel from './Items/ChangeLevel';

const SettingsPage: React.FC = () => (
    <StSettingsPage>
        <h1>Налаштування</h1>
        <SettingChoices/>
        <ChangeLevel/>
    </StSettingsPage>
);

export default SettingsPage;

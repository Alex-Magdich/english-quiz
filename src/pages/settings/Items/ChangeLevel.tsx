import React from 'react';
import { StChangeLevelContainer, StCheckbox } from '../styled';
import { getCategoryName } from '../../../helpers';
import { LEVEL } from '../../../enums';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ChangeLevel: React.FC = () => {
    const LEVELS = Object.values(LEVEL);
    const currentLevel = useTypedSelector(state => state.app.currentLevel);
    const { setWordsLevel } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWordsLevel(event.target.value as LEVEL);
    };

    return (
        <StChangeLevelContainer>
            <h3>Категорія слів</h3>
            {LEVELS.map(item => (
                <StCheckbox key={item} $isChecked={currentLevel === item}>
                    <input checked={currentLevel === item} onChange={handleChange} type="radio" value={item}/>
                    <span>{getCategoryName(item)}</span>
                </StCheckbox>
            ))}
        </StChangeLevelContainer>
    );
};

export default ChangeLevel;

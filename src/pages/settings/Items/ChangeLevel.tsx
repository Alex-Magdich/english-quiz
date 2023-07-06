import React from 'react';
import { StChangeLevelContainer, StCheckbox } from '../styled';
import { getCategoryName } from '../../../helpers';
import { LEVEL } from '../../../enums';

type TProps = {
    level: LEVEL;
    setLevel: (level: LEVEL) => void;
};

const ChangeLevel: React.FC<TProps> = ({ level, setLevel }) => {
    const LEVELS = Object.values(LEVEL);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const level = event.target.value as LEVEL;
        setLevel(level);
    };

    return (
        <StChangeLevelContainer>
            <h3>Категорія слів</h3>
            {LEVELS.map(item => (
                <StCheckbox key={item} $isChecked={level === item}>
                    <input checked={level === item} onChange={handleChange} type="radio" value={item}/>
                    <span>{getCategoryName(item)}</span>
                </StCheckbox>
            ))}
        </StChangeLevelContainer>
    );
};

export default ChangeLevel;

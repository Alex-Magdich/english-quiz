import React from 'react';
import {LEVEL} from "../../../App";
import {StChangeLevelContainer, StCheckbox} from "../styled";

type TProps = {
    level: LEVEL,
    setLevel: (level: LEVEL) => void;
}

const ChangeLevel:React.FC<TProps> = ({level, setLevel}) => {
    const LEVELS = Object.values(LEVEL);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const level = event.target.value as LEVEL;
        setLevel(level);
    };

    return (
        <StChangeLevelContainer>
            <h3>Складність слів</h3>
            {LEVELS.map(item => (
                <StCheckbox isChecked={level === item} key={item}>
                    <input type="radio" value={item} onChange={handleChange} checked={level === item}/>
                    <span>{item}</span>
                </StCheckbox>
            ))}
        </StChangeLevelContainer>
    );
};

export default ChangeLevel;
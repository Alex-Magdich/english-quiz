import React from 'react';
import { StCheckbox, StChoicesList } from '../styled';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const ANSWERS = [2, 4, 6];

const SettingChoices: React.FC = () => {
    const variants = useTypedSelector(state => state.app.variants);
    const { changeNumberVariants } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeNumberVariants(Number(event.target.value));
    };

    return (
        <div>
            <h3>Кількість варіантів відповідей</h3>
            {/*<input type='range' min='2' max='8' step='2' value={value} onChange={handleChange} />*/}
            <StChoicesList>
                {ANSWERS.map(item => (
                    <StCheckbox key={item} $isChecked={variants === item}>
                        <input checked={variants === item} onChange={handleChange} type="radio" value={item}/>
                        <span>{item}</span>
                    </StCheckbox>
                ))}
            </StChoicesList>
        </div>
    );
};

export default SettingChoices;

import React from 'react';
import {StCheckbox, StChoicesList} from "../styled";

type TProps = {
    onChange: (number: number) => void;
    variants: number;
}

const ANSWERS = [2,4,6];

const SettingChoices:React.FC<TProps> = ({onChange, variants}) => {
    const [value, setValue] = React.useState(variants);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value)
        setValue(number);
        onChange(number)
    };

    return (
        <div>
            <h3>Кількість варіантів відповідей</h3>
            {/*<input type='range' min='2' max='8' step='2' value={value} onChange={handleChange} />*/}
            <StChoicesList>
                {ANSWERS.map(item => (
                    <StCheckbox $isChecked={value === item} key={item}>
                        <input type="radio" value={item} onChange={handleChange} checked={value === item}/>
                        <span>{item}</span>
                    </StCheckbox>
                ))}
            </StChoicesList>
        </div>
    )
}

export default SettingChoices;
import React from 'react';

type TProps = {
    onChange: (number: number) => void;
    variants: number;
}

const SettingChoices:React.FC<TProps> = ({onChange, variants}) => {
    const [value, setValue] = React.useState(variants);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value)
        setValue(number);
        onChange(number)
    };

    return (
        <div>
            <p>Select number of choises</p>
            <input type='range' min='2' max='8' step='2' value={value} onChange={handleChange} />
        </div>
    )
}

export default SettingChoices;
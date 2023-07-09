import React from 'react';
import { IDefinition } from '../../../types';
import { StDefinitions } from '../styled';

type TProps = {
    definitions: Array<IDefinition>;
};

const Definitions: React.FC<TProps> = ({ definitions }) => {
    if (!definitions.length) return null;

    return (
        <StDefinitions>
            {definitions.map((item, index) => (
                <div key={index}>
                    {item.definition && (
                        <div>
                            <p>Визначення</p>
                            <p>{item.definition}</p>
                        </div>
                    )}
                    {item.example && (
                        <div>
                            <p>Приклад</p>
                            <i>{item.example}</i>
                        </div>
                    )}
                </div>
            ))}
        </StDefinitions>
    );
};

export default Definitions;

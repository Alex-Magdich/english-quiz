import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Test = () => {
    const state = useTypedSelector(state => state.counter);
    const { addValue, increment } = useActions();

    return (
        <div>
            <p>{state.counter}</p>
            <div onClick={() => increment()}>INCREMENT</div>
            <div onClick={() => addValue(2)}>ADD VALUE</div>
        </div>
    );
};

export default Test;

import { Dispatch } from 'redux';
import { COUNTER_ACTIONS, TCounterActions } from '../reducers/counterReducer';

export const increment = () => {
    return (dispatch: Dispatch<TCounterActions>) => {
        dispatch({ type: COUNTER_ACTIONS.INCREMENT });
    };
};

export const addValue = (payload: number) => {
    return (dispatch: Dispatch<TCounterActions>) => {
        dispatch({ type: COUNTER_ACTIONS.ADD_VALUE, payload });
    };
};

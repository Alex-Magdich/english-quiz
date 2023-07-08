// import { Dispatch } from 'redux';
import { COUNTER_ACTIONS } from '../reducers/counterReducer';

export const increment = () => {
    // return (dispatch: Dispatch<TCounterActions>) => {
    //     dispatch({ type: COUNTER_ACTIONS.INCREMENT });
    // };
    return { type: COUNTER_ACTIONS.INCREMENT };
};

export const incrementAsync = () => {
    // return (dispatch: Dispatch<TCounterActions>) => {
    //     dispatch({ type: COUNTER_ACTIONS.INCREMENT_ASYNC });
    // };
    return { type: COUNTER_ACTIONS.INCREMENT_ASYNC };
};

export const addValue = (payload: number) => {
    // return (dispatch: Dispatch<TCounterActions>) => {
    //     dispatch({ type: COUNTER_ACTIONS.ADD_VALUE, payload });
    // };
    return { type: COUNTER_ACTIONS.ADD_VALUE, payload };
};


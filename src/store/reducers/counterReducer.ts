type TCounterState = {
    counter: number;
};

export enum COUNTER_ACTIONS {
    INCREMENT = 'INCREMENT',
    ADD_VALUE = 'ADD_VALUE',
    INCREMENT_ASYNC = 'INCREMENT_ASYNC'
}

export type TCounterActions = {
    type: COUNTER_ACTIONS;
    payload?: any;
};

const initialState: TCounterState = {
    counter: 0,
};

// eslint-disable-next-line default-param-last
export const counterReducer = (state = initialState, action: TCounterActions): TCounterState => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT: return {
            counter: state.counter + 1,
        };
        case COUNTER_ACTIONS.ADD_VALUE: return {
            counter: state.counter + action.payload,
        };
        default: return state;
    }
};

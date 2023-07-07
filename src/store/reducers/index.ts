import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    app: appReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;


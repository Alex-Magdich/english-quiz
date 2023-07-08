import { put, takeEvery } from 'redux-saga/effects';
import { COUNTER_ACTIONS } from '../reducers/counterReducer';

export const delay = (ms: number) => new Promise(res => {
    setTimeout(res, ms);
});

// eslint-disable-next-line require-yield
export function* helloSaga() {
    console.log('Hello Sagas!');
}

function* incrementAsync() {
    yield delay(1000);
    yield put({ type: COUNTER_ACTIONS.INCREMENT });
}

export function* watchIncrementAsync() {
    yield takeEvery(COUNTER_ACTIONS.INCREMENT_ASYNC, incrementAsync);
}

import { all } from 'redux-saga/effects';
import { helloSaga, watchIncrementAsync } from './counterSaga';
import { actionWatcher } from './appSaga';

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        actionWatcher(),
    ]);
}

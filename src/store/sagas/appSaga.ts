import { delay, put, select, takeEvery } from 'redux-saga/effects';
import { APP_ACTIONS } from '../reducers/appReducer';
import { generateNewWordAction } from '../action-creators/appActions';
import { TRootState } from '../reducers';

export function* actionWatcher() {
    yield takeEvery(APP_ACTIONS.GET_NEXT_WORD, generateNewWord);
    yield takeEvery(APP_ACTIONS.CHANGE_NUMBER_ANSWERS, getNewWord);
    yield takeEvery(APP_ACTIONS.SET_WORDS_LEVEL, getNewWord);
}

function* getNewWord() {
    const { currentLevel, variants } = yield select((state: TRootState) => state.app);
    yield put(generateNewWordAction({ currentLevel, variants }));
}

function* generateNewWord() {
    yield delay(2000);
    yield getNewWord();
}


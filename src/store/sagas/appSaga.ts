import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { APP_ACTIONS } from '../reducers/appReducer';
import {
    generateNewWordAction,
    setInfoAboutWord,
    setInfoAboutWordLoading,
} from '../action-creators/appActions';
import { TRootState } from '../reducers';
import { getInformationAboutWord } from '../../api';
import { IWordObject } from '../../types';

export function* actionWatcher() {
    yield takeEvery(APP_ACTIONS.GET_NEXT_WORD, generateNewWord);
    yield takeEvery(APP_ACTIONS.CHANGE_NUMBER_ANSWERS, getNewWord);
    yield takeEvery(APP_ACTIONS.SET_WORDS_LEVEL, getNewWord);
    yield takeEvery(APP_ACTIONS.GET_INFO_ABOUT_WORD, getInfoAboutWord);
}

function* getNewWord() {
    const { currentLevel, variants } = yield select((state: TRootState) => state.app);
    yield put(generateNewWordAction({ currentLevel, variants }));
}

function* generateNewWord() {
    yield delay(2000);
    yield getNewWord();
}

function* getInfoAboutWord() {
    try {
        yield put(setInfoAboutWordLoading(true));

        const { word } = yield select((state: TRootState) => state.app);
        const data: Array<IWordObject> = yield call(getInformationAboutWord, word);
        yield put(setInfoAboutWord(data));
        yield put(setInfoAboutWordLoading(false));
    } catch (e) {
        return false;
    }
}

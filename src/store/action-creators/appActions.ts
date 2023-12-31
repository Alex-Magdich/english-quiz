import { APP_ACTIONS } from '../reducers/appReducer';
import { LEVEL, PAGES } from '../../enums';
import { TDataItem } from '../../data';
import { IWordObject } from '../../types';

export const setAnswer = (payload: string) => {
    return { type: APP_ACTIONS.SET_ANSWER, payload };
};

export const generateNewWordAction = (payload: {
    currentLevel: LEVEL;
    variants?: number;
}) => {
    return { type: APP_ACTIONS.GENERATE_NEW_WORD, payload };
};

export const getNextWord = () => {
    return { type: APP_ACTIONS.GET_NEXT_WORD };
};

export const changeNumberVariants = (payload: number) => {
    return { type: APP_ACTIONS.CHANGE_NUMBER_ANSWERS, payload };
};

export const addToFavorites = (payload: TDataItem) => {
    return { type: APP_ACTIONS.ADD_TO_FAVORITES, payload };
};

export const removeFromFavorites = (payload: string) => {
    return { type: APP_ACTIONS.REMOVE_FROM_FAVORITES, payload };
};

export const setWordsLevel = (payload: LEVEL) => {
    return { type: APP_ACTIONS.SET_WORDS_LEVEL, payload };
};

export const setActivePage = (payload: PAGES) => {
    return { type: APP_ACTIONS.SET_PAGE, payload };
};

export const setInfoAboutWord = (payload: Array<IWordObject>) => {
    return { type: APP_ACTIONS.SET_INFO_ABOUT_WORD, payload };
};

export const getInfoAboutWordAction = () => {
    return { type: APP_ACTIONS.GET_INFO_ABOUT_WORD };
};

export const setInfoAboutWordLoading = (payload: boolean) => {
    return { type: APP_ACTIONS.SET_INFO_ABOUT_WORD_LOADING, payload };
};

export const setInfoAboutWordError = (payload: string) => {
    return { type: APP_ACTIONS.SET_INFO_ABOUT_WORD_ERROR, payload };
};

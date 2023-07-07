import { selectRandomWord } from '../../helpers';
import { LEVEL, PAGES } from '../../enums';
import { DEFAULT_NUMBER_OF_ANSWERS } from '../../constants';
import { TData } from '../../data';

const initialState = {
    ...selectRandomWord(LEVEL.ELEMENTARY),
    currentLevel: LEVEL.ELEMENTARY,
    selected: '',
    variants: DEFAULT_NUMBER_OF_ANSWERS,
    activePage: PAGES.QUIZ,
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')!) as TData : [],
};

export enum APP_ACTIONS {
    SET_ANSWER = 'SET_ANSWER',
    GENERATE_NEW_WORD = 'GENERATE_NEW_WORD',
    GET_NEXT_WORD = 'GET_NEXT_WORD',
    CHANGE_NUMBER_ANSWERS = 'CHANGE_NUMBER_ANSWERS',
    ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
    REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
    SET_WORDS_LEVEL = 'SET_WORDS_LEVEL',
    SET_PAGE = 'SET_PAGE'
}

export type TAppActions = {
    type: APP_ACTIONS;
    payload?: any;
};

// eslint-disable-next-line default-param-last
export const appReducer = (state = initialState, action: TAppActions) => {
    switch (action.type) {
        case (APP_ACTIONS.SET_ANSWER): return {
            ...state,
            selected: action.payload,
        };
        case (APP_ACTIONS.GENERATE_NEW_WORD): return {
            ...state,
            selected: '',
            ...selectRandomWord(action.payload.currentLevel, action.payload.variants),
        };
        case (APP_ACTIONS.CHANGE_NUMBER_ANSWERS): return {
            ...state,
            variants: action.payload,
        };
        case (APP_ACTIONS.ADD_TO_FAVORITES): return {
            ...state,
            favorites: [...state.favorites, action.payload],
        };
        case (APP_ACTIONS.REMOVE_FROM_FAVORITES): return {
            ...state,
            favorites: [...state.favorites.filter(item => item.english !== action.payload)],
        };
        case (APP_ACTIONS.SET_WORDS_LEVEL): return {
            ...state,
            currentLevel: action.payload,
        };
        case (APP_ACTIONS.SET_PAGE): return {
            ...state,
            activePage: action.payload,
        };
        default: return state;
    }
};

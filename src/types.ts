import { selectRandomWord } from './helpers';
import { DEFAULT_NUMBER_OF_ANSWERS } from './constants';
import { TData } from './data';
import { LEVEL } from './enums';

export const initialState = {
    ...selectRandomWord(LEVEL.ELEMENTARY),
    currentLevel: LEVEL.ELEMENTARY,
    selected: '',
    variants: DEFAULT_NUMBER_OF_ANSWERS,
    voices: [] as Array<SpeechSynthesisVoice>,
    selectedVoice: 0,
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')!) as TData : [],
};

export type TState = typeof initialState;

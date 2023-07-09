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

export interface IPronunciationLicense {
    name: string;
    url: string;
}

export interface IPronunciation {
    text: string;
    audio: string;
    sourceUrl: string;
    license: IPronunciationLicense;
}

export interface IDefinition {
    definition: string;
    synonyms: Array<string>;
    antonyms: Array<string>;
    example?: string;
}

export interface IMeaning {
    partOfSpeech: string;
    definitions: Array<IDefinition>;
    synonyms: Array<string>;
    antonyms: Array<string>;
}

export interface IWordObject {
    word: string;
    phonetic: string;
    phonetics: Array<IPronunciation>;
    meanings: Array<IMeaning>;
    license: IPronunciationLicense;
    sourceUrls: Array<string>;
}

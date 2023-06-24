import {ELEMENTARY, INTERMEDIATE, PRE_INTERMEDIATE, VOCABULARY, TData, VERBS, UPPER_INTERMEDIATE, BASIC} from "./data";
import {DEFAULT_NUMBER_OF_ANSWERS} from "./constants";
import {LEVEL} from "./App";

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRandomIndex = (vocabulary: TData) => Math.floor(Math.random() * vocabulary.length);

export const generateWords = (exception: string, level:LEVEL, numberOfVariants = 4) => {
    const words = [exception];
    const vocabulary = getVocabularyLevel(level);
    while (words.length < numberOfVariants) {
        const randomWord = vocabulary[getRandomIndex(vocabulary)].ukrainian;

        if (!words.includes(randomWord)){
            words.push(randomWord)
        }
    }
    return words.sort(() => Math.random() - 0.5);
}

export const getVocabularyLevel = (level: LEVEL) => {
    switch (true) {
        case level === LEVEL.BASIC: return BASIC;
        case level === LEVEL.ELEMENTARY: return ELEMENTARY;
        case level === LEVEL.PRE_INTERMEDIATE: return PRE_INTERMEDIATE;
        case level === LEVEL.INTERMEDIATE: return INTERMEDIATE;
        case level === LEVEL.UPPER_INTERMEDIATE: return UPPER_INTERMEDIATE;
        case level === LEVEL.VERBS: return VERBS;
        default: {
            return ELEMENTARY;
        }
    }
}

export const getCategoryName = (level: LEVEL) => {
    switch (true) {
        case level === LEVEL.BASIC: return "Базові слова";
        case level === LEVEL.ELEMENTARY: return "Простий";
        case level === LEVEL.PRE_INTERMEDIATE: return "Між простим та середнім :)";
        case level === LEVEL.INTERMEDIATE: return "Середній";
        case level === LEVEL.UPPER_INTERMEDIATE: return 'Вище середнього';
        case level === LEVEL.VERBS: return 'Топ фразових дієслів';
        default: {
            return "Базові слова";
        }
    }
}

export const selectRandomWord = (level:LEVEL, numberOfVariants: number = DEFAULT_NUMBER_OF_ANSWERS) => {
    const vocabulary = getVocabularyLevel(level);
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    const word = vocabulary[randomIndex].english;
    const translate = vocabulary[randomIndex].ukrainian;
    const words = generateWords(translate,level, numberOfVariants);
    const example = vocabulary[randomIndex].example;
    return {
        word,
        translate,
        example,
        answers:words
    }
}

export const setClassName = (word: string, selected: string, translate: string) => {
    switch (true) {
        case (selected === word && word === translate):
        case (!!selected && word === translate):
            return "right";
        case (word === selected && selected !== translate):
            return "wrong";
        default: return ""
    }
}
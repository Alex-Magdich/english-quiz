import {ELEMENTARY, INTERMEDIATE, PRE_INTERMEDIATE, VOCABULARY} from "./data";
import {DEFAULT_NUMBER_OF_ANSWERS} from "./constants";
import {LEVEL} from "./App";

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRandomIndex = () => Math.floor(Math.random() * VOCABULARY.length);

export const generateWords = (exception: string, level:LEVEL, numberOfVariants = 4) => {
    const words = [exception];
    while (words.length < numberOfVariants) {
        const randomWord = getVocabularyLevel(level)[getRandomIndex()].ukrainian;

        if (!words.includes(randomWord)){
            words.push(randomWord)
        }
    }
    return words.sort(() => Math.random() - 0.5);
}

export const getVocabularyLevel = (level: LEVEL) => {
    switch (true) {
        case level === LEVEL.ELEMENTARY: return ELEMENTARY;
        case level === LEVEL.PRE_INTERMEDIATE: return PRE_INTERMEDIATE;
        case level === LEVEL.INTERMEDIATE: return INTERMEDIATE;
        default: {
            return ELEMENTARY;
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
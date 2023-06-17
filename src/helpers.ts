import {VOCABULARY} from "./data";
import {DEFAULT_NUMBER_OF_ANSWERS} from "./constants";

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getRandomIndex = () => Math.floor(Math.random() * VOCABULARY.length);

export const generateWords = (exception: string, numberOfVariants = 4) => {
    const words = [exception];
    while (words.length < numberOfVariants) {
        const randomWord = VOCABULARY[getRandomIndex()].ukrainian;

        if (!words.includes(randomWord)){
            words.push(randomWord)
        }
    }
    return words.sort(() => Math.random() - 0.5);
}

export const selectRandomWord = (numberOfVariants: number = DEFAULT_NUMBER_OF_ANSWERS) => {
    const randomIndex = Math.floor(Math.random() * VOCABULARY.length);
    const word = VOCABULARY[randomIndex].english;
    const translate = VOCABULARY[randomIndex].ukrainian;
    const words = generateWords(translate, numberOfVariants);
    const example = VOCABULARY[randomIndex].example;
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
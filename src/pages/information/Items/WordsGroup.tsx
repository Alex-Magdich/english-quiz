import React from 'react';
import { StWordsGroup } from '../styled';

type TProps = {
    title: string;
    words: Array<string>;
};

const WordsGroup: React.FC<TProps> = ({ title, words }) => {
    if (!words.length) return null;
    const uniqueWords = Array.from(new Set(words));

    return (
        <StWordsGroup>
            <div>
                {title}
                :
            </div>
            <ul>
                {uniqueWords.map(word => (
                    <li key={word}>{word}</li>
                ))}
            </ul>
        </StWordsGroup>
    );
};

export default WordsGroup;

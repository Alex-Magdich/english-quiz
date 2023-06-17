import React from 'react';

type TProps = {
    word: string;
}

const WordComponent:React.FC<TProps> = ({word}) => {
    const test = () => {
        console.log(speechSynthesis.getVoices())
        const voice = speechSynthesis.getVoices()[144];//108
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.pitch = 1
        utterance.volume = 1
        utterance.voice = voice; // ios required
        // API allows up to 10 but values > 2 break on all Chrome
        utterance.rate = .7
        window.speechSynthesis.speak(utterance);
    }
    return (
        <div>
            <h1 onClick={test}>{word}</h1>
        </div>
    );
};

export default WordComponent;
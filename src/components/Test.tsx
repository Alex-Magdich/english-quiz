import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Test = () => {
    const state = useTypedSelector(state => state.counter);
    const { addValue, increment, incrementAsync } = useActions();

    return (
        <div>
            <p>{state.counter}</p>
            <div onClick={() => increment()}>INCREMENT</div>
            <div onClick={() => addValue(2)}>ADD VALUE</div>
            <div onClick={() => incrementAsync()}>INCREMENT ASYNC</div>
        </div>
    );
};

export default Test;

// const sayWord = (sayWord?: string) => {
//     const synth = window.speechSynthesis;
//     const { selectedVoice, word, voices } = state;
//     const utterance = new SpeechSynthesisUtterance(sayWord || word);
//     utterance.voice = voices[selectedVoice];
//     utterance.rate = 0.7;
//     synth.speak(utterance);
// };

// const setVoice = (index: number) => setState(prevState => ({ ...prevState, selectedVoice: index }));
//
// React.useEffect(() => {
//     function populateVoiceList() {
//         if (typeof speechSynthesis === 'undefined') return;
//         const voices = speechSynthesis.getVoices();
//         const filteredVoices = voices.filter(item => item.lang.startsWith('en'));
//
//         setState({
//             ...state, voices: filteredVoices,
//         });
//     }
//
//     populateVoiceList();
//
//     if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
//         speechSynthesis.onvoiceschanged = populateVoiceList;
//     }
// }, []);

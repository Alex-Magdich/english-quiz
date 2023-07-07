import React from 'react';
import './App.scss';
import Footer from './mainLayout/Footer';
import { selectRandomWord } from './helpers';
import SettingsPage from './pages/settings/SettingsPage';
import Quiz from './pages/quiz/Quiz';
import { StMain } from './mainLayout/styled';
import FavoritesPage from './pages/favorites/FavoritesPage';
import { initialState } from './types';
import { APP_STATE, LEVEL } from './enums';
import Test from './components/Test';

const App = () => {
    const [currentAppState, setCurrentAppState] = React.useState({ currentAppState: APP_STATE.QUIZ });
    const [state, setState] = React.useState(initialState);

    React.useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    const setVoice = (index: number) => setState(prevState => ({ ...prevState, selectedVoice: index }));

    const sayWord = (sayWord?: string) => {
        const synth = window.speechSynthesis;
        const { selectedVoice, word, voices } = state;
        const utterance = new SpeechSynthesisUtterance(sayWord || word);
        utterance.voice = voices[selectedVoice];
        utterance.rate = 0.7;
        synth.speak(utterance);
    };

    React.useEffect(() => {
        function populateVoiceList() {
            if (typeof speechSynthesis === 'undefined') return;
            const voices = speechSynthesis.getVoices();
            const filteredVoices = voices.filter(item => item.lang.startsWith('en'));

            setState({
                ...state, voices: filteredVoices,
            });
        }

        populateVoiceList();

        if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    }, []);

    const handleChangeNumberOfVariants = (value: number) => setState({ ...state, variants: value });
    const handleSetAppState = (appState: APP_STATE) => setCurrentAppState({ currentAppState: appState });

    const setLevel = (level: LEVEL) => setState({
        ...state,
        ...selectRandomWord(level),
        currentLevel: level,
    });

    const handleRemoveFromFavorites = (word: string) => {
        setState({ ...state, favorites: state.favorites.filter(item => item.english !== word) });
    };

    const getPage = (page: APP_STATE) => {
        switch (true) {
            case page === APP_STATE.SETTINGS: return (
                <SettingsPage
                    level={state.currentLevel}
                    selectedVoice={state.selectedVoice}
                    setLevel={setLevel}
                    setVariants={handleChangeNumberOfVariants}
                    setVoice={setVoice}
                    variants={state.variants}
                    voices={state.voices}
                />
            );
            case page === APP_STATE.QUIZ: return (
                <Quiz sayWord={sayWord} setState={setState} state={state}/>
            );
            case page === APP_STATE.FAVORITES: return (
                <FavoritesPage favorites={state.favorites} onRemove={handleRemoveFromFavorites}/>
            );
            default: return <Quiz sayWord={sayWord} setState={setState} state={state}/>;
        }
    };

    return (
        <div className="main-layout">
            <Test/>
            <StMain>
                {getPage(currentAppState.currentAppState)}
            </StMain>
            <Footer currentAppState={currentAppState.currentAppState} setAppState={handleSetAppState}/>
        </div>
    );
};

export default App;

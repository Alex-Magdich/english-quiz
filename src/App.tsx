import React from 'react';
import './App.scss';
import Footer from "./mainLayout/Footer";
import {selectRandomWord} from "./helpers";
import SettingsPage from "./pages/settings/SettingsPage";
import Quiz from "./pages/quiz/Quiz";
import {StMain} from "./mainLayout/styled";
import {DEFAULT_NUMBER_OF_ANSWERS} from "./constants";
import FavoritesPage from "./pages/favorites/FavoritesPage";
import {TData} from "./data";

export enum APP_STATE {
    SETTINGS = "SETTINGS",
    QUIZ = "QUIZ",
    FAVORITES = "FAVORITES"
}
export enum LEVEL {
    BASIC = "BASIC",
    ELEMENTARY = "ELEMENTARY",
    PRE_INTERMEDIATE = "PRE_INTERMEDIATE",
    INTERMEDIATE = "INTERMEDIATE",
    VERBS = "VERBS",
    UPPER_INTERMEDIATE = 'UPPER_INTERMEDIATE'
}

const initialState = {
    ...selectRandomWord(LEVEL.ELEMENTARY),
    currentLevel: LEVEL.ELEMENTARY,
    selected: '',
    variants: DEFAULT_NUMBER_OF_ANSWERS,
    voices: [] as SpeechSynthesisVoice[],
    selectedVoice: 0,
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')!) as TData : [],
}

export type TState = typeof initialState;



const App = () => {
    const [currentAppState, setCurrentAppState] = React.useState({currentAppState: APP_STATE.QUIZ});
    const [state, setState] = React.useState(initialState);

    React.useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    const setVoice = (index: number) => setState(prevState => ({...prevState, selectedVoice: index}));

    const sayWord = (sayWord?: string) => {
        const synth = window.speechSynthesis;
        const {selectedVoice, word, voices} = state;
        const utterance = new SpeechSynthesisUtterance(sayWord || word);
        utterance.voice = voices[selectedVoice];
        utterance.rate = .7
        synth.speak(utterance);
    }

    React.useEffect(() => {
        function populateVoiceList() {
            if (typeof speechSynthesis === "undefined") return;
            const voices = speechSynthesis.getVoices();
            const filteredVoices = voices.filter(item => item.lang.startsWith('en'))
            setState({
                // @ts-ignore
                ...state, voices: filteredVoices
            })
        }

        populateVoiceList();
        if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }
    },[])

    const handleChangeNumberOfVariants = (value: number) => setState({...state, variants: value});
    const handleSetAppState = (appState: APP_STATE) => setCurrentAppState({currentAppState: appState});
    const setLevel = (level: LEVEL) => setState({
        ...state,
        ...selectRandomWord(level),
        currentLevel: level,
    });

    const handleRemoveFromFavorites = (word: string) => {
        setState({...state, favorites: state.favorites.filter(item => item.english !== word)})
    }

    const getPage = (page: APP_STATE) => {
        switch (true) {
            case page === APP_STATE.SETTINGS: return (
                <SettingsPage
                    variants={state.variants}
                    setVariants={handleChangeNumberOfVariants}
                    voices={state.voices}
                    setVoice={setVoice}
                    selectedVoice={state.selectedVoice}
                    level={state.currentLevel}
                    setLevel={setLevel}
                />
            );
            case page === APP_STATE.QUIZ: return (
                <Quiz setState={setState} state={state} sayWord={sayWord}/>
            );
            case page === APP_STATE.FAVORITES: return (
                <FavoritesPage favorites={state.favorites} onRemove={handleRemoveFromFavorites}/>
            );
            default: return <Quiz setState={setState} state={state} sayWord={sayWord}/>;
        }
    }

    return(
        <div className="main-layout">
            <StMain>
                {getPage(currentAppState.currentAppState)}
            </StMain>
            <Footer setAppState={handleSetAppState} currentAppState={currentAppState.currentAppState}/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.scss';
import Footer from './mainLayout/Footer';
import SettingsPage from './pages/settings/SettingsPage';
import Quiz from './pages/quiz/Quiz';
import { StMain } from './mainLayout/styled';
import FavoritesPage from './pages/favorites/FavoritesPage';
// import Test from './components/Test';
import { PAGES } from './enums';
import { useTypedSelector } from './hooks/useTypedSelector';
import InformationPage from './pages/information/InformationPage';

const getPage = (page: PAGES) => {
    switch (true) {
        case page === PAGES.SETTINGS: return <SettingsPage/>;
        case page === PAGES.FAVORITES: return <FavoritesPage/>;
        case page === PAGES.INFO: return <InformationPage/>;
        case page === PAGES.QUIZ: default: return <Quiz/>;
    }
};

const App = () => {
    const activePage = useTypedSelector(state => state.app.activePage);

    return (
        <div className="main-layout">
            {/*<Test/>*/}
            <StMain>{getPage(activePage)}</StMain>
            <Footer/>
        </div>
    );
};

export default App;

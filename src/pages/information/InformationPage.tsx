import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IWordObject } from '../../types';
import { StInfoGroup, StInfoItem, StInfoPage, StMeaningsItem } from './styled';
import PartOfSpeech from './Items/PartOfSpeech';
import WordsGroup from './Items/WordsGroup';
import Audio from './Items/Audio';
import { useActions } from '../../hooks/useActions';
import Definitions from './Items/Definitions';
import WordComponent from '../quiz/items/WordComponent';
import Loading from '../../components/Loading';

const InformationPage = () => {
    const info = useTypedSelector(state => state.app.info) as Array<IWordObject>;
    const word = useTypedSelector((state) => state.app.word);
    const isLoading = useTypedSelector((state) => state.app.infoIsLoading);
    const { getInfoAboutWordAction } = useActions();

    React.useEffect(() => {
        if (info[0]?.word !== word) {
            getInfoAboutWordAction();
        }
    }, []);

    return (
        <StInfoPage>
            <h2>Додаткова інформація</h2>
            <WordComponent/>
            <br/>
            {isLoading ? <Loading/> : (
                <StInfoGroup>
                    {info.map((item, index) => {
                        const { phonetics, meanings } = item;

                        return (
                            <StInfoItem key={index}>
                                <h3>{`${item.word} ${item.phonetic || ''}`}</h3>
                                {phonetics?.map((item, index) => <Audio key={index} item={item}/>)}
                                {meanings?.map((item, index) => (
                                    <StMeaningsItem key={index}>
                                        <PartOfSpeech name={item.partOfSpeech}/>
                                        <WordsGroup title="Антоніми" words={item.antonyms}/>
                                        <WordsGroup title="Синоніми" words={item.synonyms}/>
                                        <Definitions definitions={item.definitions}/>
                                    </StMeaningsItem>
                                ))}
                            </StInfoItem>
                        );
                    })}
                </StInfoGroup>
            )}
        </StInfoPage>
    );
};

export default InformationPage;

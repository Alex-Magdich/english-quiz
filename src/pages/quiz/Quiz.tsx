import React from 'react';
import AnswerButton from "./items/AnswerButton";
import HelpComponent from "./items/HelpComponent";
import {selectRandomWord, setClassName, sleep} from "../../helpers";
import WordComponent from "./items/WordComponent";
import {TState} from "../../App";
import {StAnswerContainer, StQuizContainer, StQuizHelp, StTimeline} from "./styled";
import {AiFillSound} from "react-icons/ai";

type TProps = {
    state: TState;
    setState: (state: (prevState: TState) => any) => void;
    sayWord: () => void;
}

const Quiz:React.FC<TProps> = ({state, setState, sayWord}) => {
    const {
        word,
        answers,
        translate,
        example,
        selected,
        variants,
        currentLevel,
    } = state;

    const setSelected = (word: string) => setState(prevState => ({...prevState, selected: word,}))

    React.useEffect(() => {
        setState(prevState => ({...prevState, ...selectRandomWord(currentLevel, variants)}));
    },[variants])

    const getNext = async () => {
        sleep(2000).then(() => {
            setState(prevState => ({
                ...prevState,
                selected: '',
                ...selectRandomWord(currentLevel, variants),
            }));
        });
    };

    return(
        <StQuizContainer>
            <WordComponent word={word} sayWord={sayWord}/>
            <StTimeline animated={!!selected}/>
            <StAnswerContainer>
                {answers.map(word =>(
                    <AnswerButton
                        key={word}
                        disabled={!!selected}
                        word={word}
                        onClick={setSelected}
                        className={setClassName(word, selected, translate)}
                        getNext={getNext}
                    />
                ))}
            </StAnswerContainer>
            <HelpComponent example={example} word={word} sayWord={sayWord}/>
            <StQuizHelp>
                <span>Натисни на фразу або слово з такою позначкою - </span>
                <AiFillSound/>
                <span> щоб прослухати вимову</span>
            </StQuizHelp>
        </StQuizContainer>
    );
}

export default Quiz;

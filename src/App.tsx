import React from 'react';
import './App.scss';
import AnswerButton from "./components/AnswerButton";
import SettingChoices from "./components/SettingChoices";
import HelpComponent from "./components/HelpComponent";
import {selectRandomWord, setClassName, sleep} from "./helpers";
import {DEFAULT_NUMBER_OF_ANSWERS} from "./constants";
import WordComponent from "./components/WordComponent";

const initialState = selectRandomWord();

const App = () => {
  const [state, setState] = React.useState(initialState);
  const [selected, setSelected] = React.useState('');
  const [variants, setVariants] = React.useState(DEFAULT_NUMBER_OF_ANSWERS);

  const { word, answers, translate, example } = state;

  React.useEffect(() => {
    setState(selectRandomWord(variants));
  },[variants])

  const getNext = async () => {
    sleep(2000).then(() => {
      setState(selectRandomWord(variants));
      setSelected('')
    });
  };

  return(
      <div className="box">
        <SettingChoices onChange={setVariants} variants={variants}/>
        <WordComponent word={word}/>
        <HelpComponent example={example} word={word}/>
        <div className="container">
          {answers.map(word =>(
              <AnswerButton
                  disabled={!!selected}
                  word={word}
                  onClick={setSelected}
                  className={setClassName(word, selected, translate)}
                  getNext={getNext}
              />
          ))}
        </div>
      </div>
  );
}

export default App;

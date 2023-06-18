import React from 'react';
import {TExample} from "../../../data";
import { SiTheconversation } from "react-icons/si";
import {StExample, StExampleContainer, StShowExample} from "../styled";
import {AiFillSound} from "react-icons/ai";

type TProps = {
    example: TExample;
    word: string;
    sayWord: (word: string) => void;
}

const HelpComponent:React.FC<TProps>= ({example, word, sayWord}) => {
    const [isShow, setIsShow] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(()=>{
        setIsShow(false);
        setToggle(false);
    },[word])

    const handleToggle = () => setToggle(!toggle);
    const saySentence = () => sayWord(example.english);

    return (
        <StExampleContainer>
            {!isShow && (
                <StShowExample onClick={() => setIsShow(true)}>
                    Подивитися приклад <SiTheconversation/>
                </StShowExample>
            )}
            {isShow && (
                <>
                    <a href={`https://dictionary.cambridge.org/dictionary/english-ukrainian/${word}`} target="_blank">
                        Подивитись слово <strong>{word}</strong> <br/>
                        у словарі кембриджу
                    </a>
                    <StExample>
                        {toggle
                            ? <p>{example.ukrainian}</p>
                            : <p onClick={saySentence}>
                                {example.english}
                                <AiFillSound/>
                            </p>}

                        <div onClick={handleToggle}>
                            Перекласти на {!toggle ? 'солов\'їну' : 'англійську'}
                        </div>
                    </StExample>
                </>
            )}
        </StExampleContainer>
    )
}

export default HelpComponent;
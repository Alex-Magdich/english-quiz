import React from 'react';
import {TExample} from "../data";

type TProps = {
    example: TExample;
    word: string
}

const HelpComponent:React.FC<TProps>= ({example, word}) => {
    const [isShow, setIsShow] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(()=>{
        setIsShow(false);
        setToggle(false);
    },[word])

    const handleToggle = () => setToggle(!toggle);

    return (
        <div className='example'>
            {!isShow && <div onClick={() => setIsShow(true)}>help</div>}
            {isShow && (
                <div onClick={handleToggle}>
                    {toggle ? <p>{example.ukrainian}</p> : <p>{example.english}</p>}
                </div>
            )}
        </div>
    )
}

export default HelpComponent;
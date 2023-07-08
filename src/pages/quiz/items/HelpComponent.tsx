import React from 'react';
import { MdHelpOutline } from 'react-icons/md';
import { AiOutlineRotateLeft } from 'react-icons/ai';
import { LuExternalLink } from 'react-icons/lu';
import { StExampleContainer, StIconRotate, StShowExample } from '../styled';
import { StCard, StCardFace, StScene } from '../../favorites/styled';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const initialState = {
    isShow: false,
    toggle: false,
};

const HelpComponent: React.FC = () => {
    const { word, example } = useTypedSelector(state => state.app);

    const [state, setState] = React.useState(initialState);
    const { isShow, toggle } = state;

    React.useEffect(() => {
        setState(initialState);
    }, [word]);

    const handleToggle = () => setState({ ...state, toggle: !toggle });
    const handleShowExample = () => setState({ ...state, isShow: true });

    return (
        <StExampleContainer>
            {!isShow && (
                <StShowExample onClick={handleShowExample}>
                    <MdHelpOutline/>
                </StShowExample>
            )}
            {isShow && (
                <>
                    <StScene>
                        <StCard className={toggle ? 'is-flipped' : ''} onClick={handleToggle}>
                            <StCardFace>
                                <StIconRotate>
                                    <AiOutlineRotateLeft/>
                                </StIconRotate>
                                <div>
                                    {example.english}
                                </div>
                            </StCardFace>
                            <StCardFace $isBack>
                                <div>{example.ukrainian}</div>
                            </StCardFace>
                        </StCard>
                    </StScene>
                    <a href={`https://dictionary.cambridge.org/dictionary/english-ukrainian/${word}`} rel="noreferrer" target="_blank">
                        <span>
                            Подивитись слово 
                            {' '}
                            <strong>{word}</strong> 
                            {' '}
                            <br/>
                            у словарі кембриджу
                        </span>
                        <LuExternalLink/>
                    </a>
                </>
            )}
        </StExampleContainer>
    );
};

export default HelpComponent;

import React from 'react';
import { GiSeaTurtle, GiSoundWaves } from 'react-icons/gi';
import { StAudio, StPlayAudio } from '../styled';
import { IPronunciation } from '../../../types';

type TProps = {
    item: IPronunciation;
};

const Audio: React.FC<TProps> = ({ item }) => {
    const [audio, setAudio] = React.useState(null);
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref) {
            setAudio(ref.current);
        }
    }, []);

    const play = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audio.playbackRate = 1;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audio.play();
    };

    const playhalf = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audio.playbackRate = 0.7;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        audio.play();
    };

    if (!item.audio) return null;

    return (
        <StAudio>
            <p>{item.text}</p>
            <StPlayAudio onClick={play}><GiSoundWaves/></StPlayAudio>
            <StPlayAudio $small onClick={playhalf}><GiSeaTurtle/></StPlayAudio>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio ref={ref} controls src={item.audio}/>
        </StAudio>
    );
};

export default Audio;

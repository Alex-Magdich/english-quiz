import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { StCard, StCardFace, StFavoriteContainer, StRemove, StScene } from './styled';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const FavoritesPage: React.FC = () => {
    const refArray: React.MutableRefObject<Array<HTMLDivElement>> = React.useRef([]);
    const handleToggle = (index: number) => refArray.current[index].classList.toggle('is-flipped');
    const favorites = useTypedSelector(state => state.app.favorites);
    const { removeFromFavorites } = useActions();

    React.useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
    return (
        <StFavoriteContainer>
            {!favorites.length ? (
                <h1>
                    Це розділ де будуть твої обрані слова
                    <br/>
                    <br/>
                    Тисни на серце поруч зі словом щоб побачити його тут :)
                </h1>
            ) : (
                <>
                    <h1>
                        Твої обрані слова (
                        {favorites.length}
                        )
                    </h1>
                    {favorites.map((item, index) => {
                        const handleRemove = () => removeFromFavorites(item.english);

                        return (
                            <StScene key={item.english} style={{ zIndex: favorites.length - index }}>
                                <StCard
                                    ref={ref => { if (ref) refArray.current[index] = ref; }}
                                    //eslint-disable-next-line react/jsx-no-bind
                                    onClick={handleToggle.bind(null, index)}
                                >
                                    <StCardFace>
                                        <div>{item.english}</div>
                                        {/*<div>{item.example.english}</div>*/}
                                    </StCardFace>
                                    <StCardFace $isBack>
                                        <div>{item.ukrainian}</div>
                                        {/*<div>{item.example.ukrainian}</div>*/}
                                        <StRemove onClick={handleRemove}><AiOutlineDelete/></StRemove>
                                    </StCardFace>
                                </StCard>
                            </StScene>
                        );
                    })}
                </>
            )}
        </StFavoriteContainer>
    );
};

export default FavoritesPage;

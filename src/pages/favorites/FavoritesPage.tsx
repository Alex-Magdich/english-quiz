import React from 'react';
import {TDataItem} from "../../data";
import {StCard, StCardFace, StFavoriteContainer, StRemove, StScene} from "./styled";
import {AiOutlineDelete} from 'react-icons/ai';

export type TProps = {
    favorites: Array<TDataItem>;
    onRemove: (word: string) => void;
}

const FavoritesPage:React.FC<TProps> = ({favorites,onRemove}) => {
    const refArray: React.MutableRefObject<Array<HTMLDivElement>> = React.useRef([]);
    const handleToggle = (index:number) => refArray.current[index].classList.toggle("is-flipped");

    return (
        <StFavoriteContainer>
            {!favorites.length ? (
                <h1>
                    Це розділ де будуть твої обрані слова
                    <br/>
                    <br/>
                    Тисни на серце поруч зі словом щоб побачити його тут :)
                </h1>
            ):(
                <>
                    <h1>Твої обрані слова ({favorites.length})</h1>
                    {favorites.map((item, index) => {
                        const handleRemove = () => onRemove(item.english)

                        return (
                            <StScene key={item.english} style={{zIndex: favorites.length - index}}>
                                <StCard
                                    onClick={handleToggle.bind(null, index)}
                                    ref={ref => {if (ref) refArray.current[index] = ref;}}
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
                        )
                    })}
                </>
            )}
        </StFavoriteContainer>
    );
};

export default FavoritesPage;
import React from 'react';
import {AiOutlineHeart,AiTwotoneHeart } from 'react-icons/ai';
import { StAnimationHeart, StToggleFavorites} from "../styled";
import {sleep} from "../../../helpers";

type TProps = {
    isFavorite?: boolean;
    toggleFavorite: () => void;
};

const TOP = 0;

const initialState = {top: TOP, right: 0, animationEnd: false};

const ToggleFavorite:React.FC<TProps> = ({isFavorite, toggleFavorite}) => {
    const [coordinates, setCoordinates] = React.useState(initialState);

    const handleClick = () => {
        const domBtn = document.querySelector('#favorites-button');
        setCoordinates(initialState);
        if (domBtn && !isFavorite) {
            const coordinates = domBtn.getBoundingClientRect();
            setCoordinates({
                top: coordinates.top,
                right: coordinates.right - coordinates.left,
                animationEnd: false
            })
            sleep(1000).then(() => {
                setCoordinates({
                    top: coordinates.top,
                    right: coordinates.right,
                    animationEnd: true
                })
            });
        }
        toggleFavorite()
    }

    return (
        <>
            <StToggleFavorites onClick={handleClick} top={TOP} $isFavorite={!!isFavorite}>
                {isFavorite ? <AiTwotoneHeart color={"red"}/> : <AiOutlineHeart/>}
            </StToggleFavorites>
            <StAnimationHeart
                top={coordinates.top}
                right={coordinates.right}
                $isFavorite={!!isFavorite}
                $isAnimEnd={coordinates.animationEnd}
            >
                <AiTwotoneHeart color={"red"}/>
            </StAnimationHeart>
        </>

    );
};

export default ToggleFavorite;
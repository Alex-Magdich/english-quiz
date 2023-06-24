import styled, {css, keyframes} from "styled-components";
import {COLORS, MIXINS, RADIUS} from "../../constants";

export const StToggleFavorites = styled.div<{top: number, $isFavorite: boolean}>`
  position: absolute;
  display: flex;
  top: ${({top}) => `${top}px;`};
  right: 0;
  font-size: 30px;
  border-radius: 50px;
  padding: 5px;
  z-index: 1;
  background: ${COLORS.primary};
  ${({$isFavorite}) => $isFavorite ? `${MIXINS.btnShadowActive}` : `${MIXINS.btnShadow};` }
  
`;

export const StAnimationHeart = styled.div<{top: number, right: number, $isFavorite: boolean,$isAnimEnd:boolean}>`
  position: absolute;
  font-size: 30px;
  transition: .9s ease-out;
  pointer-events: none;
  ${({top}) => `top: ${top || 4}px;`};
  ${({right}) => `right: ${right || 4}px;`};
  ${({$isAnimEnd}) => $isAnimEnd ? `
      visibility: hidden;
  `:`
  `};
  
  ${({$isFavorite}) => $isFavorite ? css`
      visibility: hidden;
  `:`
      transition: none;
  `};
  
`;

export const StFavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  overflow-y: auto;
  height: 100%;
  margin: 0 -20px;
  padding: 20px 0;
  font-size: 25px;
  h1{
    z-index: 99999;
    padding: 0 20px;
    font-size: 30px;
  }
`;

export const StScene = styled.div`
  width: calc(100% - 40px);
  min-height: 80px;
  perspective: 1000px;
  margin: 0 auto;
`;

export const StRemove = styled.div`
  color: white;
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 5px;
  background: red;
  align-items: center;
  transform: translateX(100%);
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const StCard = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  color: white;
  background: ${COLORS.primary};
  border-radius: ${RADIUS.big};
  box-shadow:  -3px 4px 20px #08102b, 5px -5px 20px #1a3285;
  
  &.is-flipped{
    transform: rotateY(180deg);
    ${StRemove}{
      animation: ${slideIn} 1s 1s forwards;
    }
  }
`;

export const StCardFace = styled.div<{$isBack?: boolean}>`
  position: absolute;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;  
  text-align: center;
  font-weight: bold;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: ${RADIUS.big};
  ${({$isBack}) => $isBack && css`
    transform: rotateY(180deg);
  `}
  div:first-child{
    &::first-letter{
      text-transform: capitalize;
    }
  }
`;


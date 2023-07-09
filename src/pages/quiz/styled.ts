import styled from 'styled-components';
import { COLORS, MIXINS, RADIUS } from '../../constants';
import { StScene } from '../favorites/styled';

export const StWordComponent = styled.div`
  text-transform: capitalize;
  color: ${COLORS.accent};
  user-select: none;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  padding: 40px 0 20px;
  span{
    text-shadow: 3px -2px 1px #00f95769, -4px 5px 10px #000000
  }
`;

export const StQuizContainer = styled.div`
  position: relative;
  height: 100%;
  margin-top: 20px;
`;

export const StQuizHelp = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 16px;
  padding-bottom: 40px;
  svg{
    font-size: 1.5em;
    border: 1px solid;
    color: white;
    border-radius: 50%;
    padding: 5px;
    margin-bottom: -7px;
  }
`;

export const StExampleContainer = styled.div`
  padding: 40px 0;
  text-align: right;
  min-height: 120px;
  ${StScene}{
    width: 100%;
    height: 120px;
    font-size: 18px;
    transform: translateX(-100%);
    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0%);
      }
    }
    animation: slideIn .7s forwards;
  }
  a{
    text-decoration: none;
    color: white;
    font-size: 16px;
    margin-top: 30px;
    display: inline-flex;
    align-items: center;

    svg{
      font-size: 30px;
      margin-left: 5px;
    }
    opacity: 0;
    transform: translateY(-10px);
    @keyframes show {
      from {
        transform: translateY(-10px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }
    animation: show 1s 1.5s forwards;
    strong{
      color: ${COLORS.accent};
    }
  }
`;

export const StIconRotate = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 35px;
`;

export const StExample = styled.div`
  text-align: left;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  div{
    display: flex;
    position: absolute;
    top: 110%;
    right: 0;
    font-size: 12px;
    border: 1px solid;
    padding: 10px;
  }
  p{
    display: flex;
    align-items: center;
    gap: 5px;
    min-height: 2em;
    svg{
      font-size: 1.7em;
      border: 1px solid;
      border-radius: 50%;
      padding: 5px;
      flex-shrink: 0;
    }
  }
`;

export const StShowExample = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 5px;
  font-size: 35px;
  border-radius: 50%;
  ${MIXINS.btnShadow};
  &:active{
    ${MIXINS.btnShadowActive};
  }
`;

export const StAnswerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const StAnswerButton = styled.div<{ disabled: boolean;$isClicked: boolean }>`
  text-align: center;
  width: calc(50% - 5px);
  background: transparent;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  padding: 1.3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${RADIUS.medium};
  
  ${MIXINS.btnShadow};
  ${({ $isClicked }) => $isClicked && `${MIXINS.btnShadowActive};`};
  &:active{
    ${MIXINS.btnShadowActive};
  }
  ${({ disabled }) => (disabled ? 'pointer-events: none; opacity: .5;' : '')};
  &:disabled:not(.right,.wrong){
    opacity: .5;
  }
  &.right{
    color: ${COLORS.accent};
    opacity: 1;
  }
  &.wrong{
    color: ${COLORS.red};
    opacity: 1;
  }
`;

export const StTimeline = styled.div<{ $animated: boolean }>`
  width: 0;
  height: 3px;
  background: #00f957;
  margin-bottom: 10px;
  @keyframes line{
    from {
      width: 0;
    }
    to{
      width: 100%;
    }
  }
  ${({ $animated }) => ($animated ? 'animation: line 2s linear forwards;' : '')};
  
`;

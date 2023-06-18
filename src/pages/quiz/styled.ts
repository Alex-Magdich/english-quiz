import styled from 'styled-components';
import {COLORS} from "../../constants";

export const StWordComponent = styled.div`
  text-transform: capitalize;
  margin: 0;
  color: ${COLORS.accent};
  user-select: none;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  svg{
    font-size: .7em;
    position: absolute;
    border: 1px solid;
    color: white;
    border-radius: 50%;
    padding: 5px;
  }
`;

export const StQuizContainer = styled.div`
  position: relative;
  height: 100%;
`;
export const StQuizHelp = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 20px;
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
  a{
    text-decoration: underline;
    color: white;
    font-size: 16px;
    margin-bottom: 30px;
    display: block;
    strong{
      color: ${COLORS.accent};
    }
  }
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
  border: 1px solid;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

export const StAnswerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const StAnswerButton = styled.div<{disabled: boolean}>`
  text-align: center;
  width: calc(50% - 5px);
  background: transparent;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid white;
  padding: 1rem;
  color: white;
  ${({disabled}) => disabled ? `pointer-events: none; opacity: .5;` : ''};
  &:disabled:not(.right,.wrong){
    opacity: .5;
  }
  &.right{
    background: ${COLORS.accent};
    color: ${COLORS.primary};
    border-color: currentColor;
    opacity: 1;
  }
  &.wrong{
    background: #ff6868;
    color: ${COLORS.primary};
    border-color: currentColor;
    opacity: 1;
  }
`;

export const StTimeline = styled.div<{animated: boolean}>`
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
  ${({animated}) => animated ? `animation: line 2s linear forwards;` : ''};
  
`;
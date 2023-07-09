import styled from 'styled-components';
import { MIXINS, RADIUS } from '../../constants';
import { StWordComponent } from '../quiz/styled';

export const StInfoPage = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 20px;
  margin: 0 -20px;
  h2{
    text-align: center;
    height: 30px;
  }
  ${StWordComponent}{
    padding-top: 10px;
  }
`;

export const StInfoGroup = styled.div`
  opacity: 0;
  transform: translateY(-10px);
  animation: .5s showIn forwards ease-in;
  @keyframes showIn {
    0%{
      opacity: 0;
      transform: translateY(-10px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StAudio = styled.div`
  padding: 1rem;
  display: flex;
  gap: 0 1rem;
  align-items: center;
  audio{
    display: none;
  }
`;

export const StPlayAudio = styled.div<{ $small?: boolean }>`
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 35px;
  border-radius: ${RADIUS.medium};
  ${MIXINS.btnShadow};
  ${({ $small }) => $small && `
      width: 45px;
      height: 45px;
      font-size: 30px;
  `}; 
  &:active{
    ${MIXINS.btnShadowActive};
  }
  color: #fff;
`;

export const StInfoItem = styled.div`
  //border: 1px solid white;
  & + & {
    margin-top: 2rem;
  }
  h3{
    text-align: center;
  }
`;

export const StAudioItem = styled.div`
  //border: 1px solid red;
`;

export const StPartOfSpeech = styled.div`
  //border: 1px solid green;
  padding: 1rem 0 ;
`;

export const StWordsGroup = styled.div`
  //border: 1px solid blue;
  padding-left: 1rem;
  padding-bottom: 1rem;
  div{
    text-decoration: underline;
  }
  ul{
    padding-left: 2rem;
    padding-top: .5rem;
    columns: 2;
  }
`;

export const StMeaningsItem = styled.div`
  //border: 1px solid yellow;
  margin-top: 2rem;
`;

export const StDefinitions = styled.div`
  & > div{
    //margin-top: 2rem;
    padding-left: 1rem;
    div{
      margin-bottom: .5rem;
      p:first-child{
        text-decoration: underline;
        margin-bottom: 5px;
      }
    }
  }
`;

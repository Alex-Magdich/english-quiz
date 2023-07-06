import styled, { css } from 'styled-components';
import { MIXINS, RADIUS } from '../../constants';

export const StSettingsPage = styled.div`
  position: relative;
  height: 100%;
  padding-top: 20px;
 
  h3{
    margin-top: 1.5rem;
    margin-bottom: .5rem;
  }
`;

export const StChoicesList = styled.div`
  display: flex;
  font-size: 20px;
  gap: 0 10px;
`;

export const StCheckbox = styled.label<{ $isChecked: boolean }>`
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  border-radius: ${RADIUS.small};
  ${MIXINS.btnShadow};
  &:active{
    ${MIXINS.btnShadowActive};
  }
  ${({ $isChecked }) => ($isChecked ? css`
    ${MIXINS.btnShadowActive};
  ` : '')}
  input{
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  & + label {
    border-left: 0;
  }
`;

export const StSelect = styled.select`
  width: 100%;
  height: 30px;
`;

export const StChangeLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  ${StCheckbox}{
    width: 100%;
  }
`;


import styled, {css} from 'styled-components';

export const StSettingsPage = styled.div`
  position: relative;
  height: 100%;
  h2{
  }
  h3{
    margin-top: 1.5rem;
    margin-bottom: .5rem;
  }
`;

export const StChoicesList = styled.div`
  display: flex;
  font-size: 20px;
`;

export const StCheckbox = styled.label<{isChecked: boolean}>`
  border: 1px solid white;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  ${({isChecked}) => isChecked ? css`
    background: #00f957;
    color: #112158;
  ` : ``}
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
  ${StCheckbox}{
    width: 100%;
    border: 1px solid white!important;
  }
`;


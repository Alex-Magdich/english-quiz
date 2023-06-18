import styled from 'styled-components';
import {StSettingButton} from "../pages/settings/Items/SettingButton";

export const StHeader = styled.header`
  height: 50px;
  width: 100%;
`;

export const StFooter = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid;
  ${StSettingButton}{
    border-left: 1px solid white;
  }
`;

export const StMain = styled.main`
  
`;

export const StWhereClick = styled.div`
  position: absolute;
  top: -80px;
  font-size: 25px;
  right: 90px;
  font-weight: bold;
  svg{
    font-size: 35px;
    position: absolute;
  }
`;
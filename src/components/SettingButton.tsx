import React from 'react';
import styled, { css } from 'styled-components';
import { MIXINS, RADIUS } from '../constants';

export const StSettingButton = styled.div<{ selected: boolean }>`
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 35px;
  border-radius: ${RADIUS.medium};
  ${MIXINS.btnShadow};
  color: #fff;
  
  ${({ selected }) => (selected ? css`
    ${MIXINS.btnShadowActive};
    font-size: 30px;
  ` : '')};
`;

type TProps = {
    icon: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
    isFavoriteBtn?: boolean;
};

const SettingButton: React.FC<TProps> = ({ icon, onClick, isActive, isFavoriteBtn }) => {
    return (
        <StSettingButton id={isFavoriteBtn ? 'favorites-button' : ''} onClick={onClick} selected={isActive}>
            {icon}
        </StSettingButton>
    );
};

export default SettingButton;

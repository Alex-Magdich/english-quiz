import React from 'react';
import styled from 'styled-components';

export const StSettingButton = styled.div<{selected: boolean}>`
  width: 70px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 40px;
  ${({selected}) => selected ? `
    color: #00f957;
  `:``};
`;

type TProps = {
    icon: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
}

const SettingButton:React.FC<TProps> = ({ icon, onClick, isActive }) => {
    return (
        <StSettingButton onClick={onClick} selected={isActive}>
            {icon}
        </StSettingButton>
    );
};

export default SettingButton;
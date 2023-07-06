import styled from 'styled-components';

export const StHeader = styled.header`
  height: 50px;
  width: 100%;
`;

export const StFooter = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 0 10px;
  padding: 20px;
  box-shadow: 0px 0px 15px 0px #00000078;
  z-index: 1000000;
`;

export const StMain = styled.main`
  height: 100%;
  padding: 0 20px;
  overflow: hidden;
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

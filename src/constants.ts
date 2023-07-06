import styled, { css } from 'styled-components';

export const DEFAULT_NUMBER_OF_ANSWERS = 4;

export const COLORS = {
    primary: '#112158',
    accent: '#00f957',
    red: '#ff0000',
    boxShadow: '',
};

export const RADIUS = {
    small: '5px',
    medium: '15px',
    big: '25px',
};

export const btnShadow = css`
  box-shadow:  -5px 5px 5px #070d23,
    5px -5px 5px #1b358d;
`;

export const btnShadowActive = css`
  box-shadow: inset -5px 5px 5px #070d23,
  inset 5px -5px 5px #1b358d;
`;

export const MIXINS = {
    btnShadow,
    btnShadowActive,
};

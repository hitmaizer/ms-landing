import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: 700;
  font-size: 18px;
  line-height: 17px;
  transition: all 300ms ease;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mutedGray};

  ${({ ident, currLang }) =>
    currLang === ident &&
    css`
      color: ${({ theme }) => theme.colors.offWhite};
      text-shadow: rgb(255 255 255 / 30%) 0px 0px 12px;
    `}
`;

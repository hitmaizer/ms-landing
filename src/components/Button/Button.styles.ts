import { rem } from 'src/hooks/useRem';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: 700;
  font-size: ${rem(18)};
  line-height: ${rem(17)};
  transition: all 300ms ease;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.mutedGray};

  ${({ ident, currLang }) =>
    currLang === ident &&
    css`
      color: ${({ theme }) => theme.colors.offWhite};
      text-shadow: rgb(255 255 255 / 30%) ${rem(0)} ${rem(0)} ${rem(12)};
    `}
`;

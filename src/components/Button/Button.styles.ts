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
  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme }) => theme.colors.mutedGray};
      border: 1px solid ${({ theme }) => theme.colors.mutedGray};
      background-color: transparent;
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray50};
        color: ${({ theme }) => theme.colors.offWhite};
      }
    `};
`;

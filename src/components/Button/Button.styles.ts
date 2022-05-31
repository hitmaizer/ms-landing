import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.archivoBlack};
  padding: 16px 24px;
  font-weight: 900;
  font-size: 16px;
  line-height: 17px;
  transition: all 300ms ease;

  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray50};
      background-color: transparent;
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray50};
        color: ${({ theme }) => theme.colors.gray900};
      }
    `}
`;

import { mediaQueries } from '@styles';
import styled, { css } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';
import { FooterProps } from './Footer.types';

export const Footer = styled.div<FooterProps>`
  ${flexbox}
  ${layout}
  ${space}
  width: 100%;
  flex-direction: column;

  ${mediaQueries.lg} {
    flex-direction: row;
    height: 18vh;
  }

  ${({ open }) =>
    open === true &&
    css`
      overflow-y: hidden;
    `}
`;

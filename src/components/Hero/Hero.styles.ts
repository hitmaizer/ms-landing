import { mediaQueries } from '@styles';
import styled, { css } from 'styled-components';
import { HeroProps } from './Hero.types';

export const Hero = styled.main<HeroProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88vh;

  ${mediaQueries.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 60vh;
  }

  ${mediaQueries.lg} {
    height: 70vh;
  }

  ${({ open }) =>
    open === true &&
    css`
      overflow-y: hidden;
    `}
`;

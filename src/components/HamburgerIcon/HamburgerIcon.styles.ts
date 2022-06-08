import { mediaQueries } from '@styles';
import styled, { css } from 'styled-components';
import { HamburgerIconProps } from './HamburgerIcon.types';

export const Container = styled.div`
  width: 25vw;
  display: block;
  z-index: 10;
  ${mediaQueries.lg} {
    display: none;
  }
`;

export const Hamburger = styled.span<HamburgerIconProps>`
  width: 2em;
  height: 0.1em;
  background-color: ${({ theme }) => theme.colors.mutedGray};
  position: absolute;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    width: 2em;
    height: 0.1em;
    background-color: ${({ theme }) => theme.colors.mutedGray};
    position: absolute;
    display: block;
    transition: all 300ms ease;
  }

  &::before {
    top: -8px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  &::after {
    bottom: -8px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  ${({ open }) =>
    open === true &&
    css`
      background-color: transparent;

      &::before,
      &::after {
        background-color: ${({ theme }) => theme.colors.offWhite};
      }

      &::before {
        transform: rotate(40deg);
        top: 1px;
      }

      &::after {
        transform: rotate(-40deg);
        bottom: 0px;
      }
    `}
`;

export const HamburgerContent = styled.div<HamburgerIconProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100vw;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  transform: translateY(-100%);
  transition: all 600ms ease;
  z-index: 0;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ open }) =>
    open === true &&
    css`
      transform: translateY(13.5%);
    `}
`;

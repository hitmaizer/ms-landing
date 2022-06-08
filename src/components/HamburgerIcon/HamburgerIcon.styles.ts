import { mediaQueries } from '@styles';
import styled, { css } from 'styled-components';
import { HamburgerIconProps } from './HamburgerICon.types';

export const Container = styled.div`
  width: 25vw;
  display: block;
  ${mediaQueries.lg} {
    display: none;
  }
`;

export const Hamburger = styled.span<HamburgerIconProps>`
  width: 3em;
  height: 0.3em;
  background-color: ${({ theme }) => theme.colors.mutedGray};
  position: absolute;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    width: 3em;
    height: 0.3em;
    background-color: ${({ theme }) => theme.colors.mutedGray};
    position: absolute;
    display: block;
    transition: all 300ms ease;
  }

  &::before {
    top: -12px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  &::after {
    bottom: -12px;
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
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  transform: translateY(-100%);
  transition: all 300ms ease;
  z-index: 9;

  ${({ open }) =>
    open === true &&
    css`
      transform: translateY(12%);
    `}
`;

import { mediaQueries } from '@styles';
import { rem } from 'src/hooks/useRem';
import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';
import { BlockProps } from './Block.types';

export const Block = styled.div<BlockProps>`
  ${flexbox}
  ${space}
  ${layout}
  ${gridGap}
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  outline: ${rem(1)} solid ${({ theme }) => theme.colors.stroke};
  padding: ${rem(24)};
  min-height: 12vh;
  height: 100%;
  outline-offset: ${rem(0.5)};
  position: relative;

  ${({ center }) =>
    center &&
    css`
      place-content: center;
    `}

  ${({ hero }) =>
    hero &&
    css`
      padding: 0;
      outline-offset: 0;
    `};

  ${({ button }) =>
    button &&
    css`
      padding: ${rem(16)};
      ${mediaQueries.md} {
        padding: ${rem(16)};
      }
      cursor: pointer;
      min-height: auto;
      place-content: center;
      &:hover {
        button {
          color: ${({ theme }) => theme.colors.offWhite};
        }
      }
    `}
`;

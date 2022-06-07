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
  outline: 1px solid ${({ theme }) => theme.colors.stroke};
  padding: 24px;
  min-height: 12vh;
  height: 100%;
  outline-offset: 0.5px;
  ${({ hero }) =>
    hero &&
    css`
      padding: 0px;
      outline-offset: 0px;
    `};
`;

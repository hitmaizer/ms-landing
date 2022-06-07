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
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  padding: 24px;
  min-height: 12vh;

  ${({ hero }) =>
    hero &&
    css`
      padding: 0;
    `}
`;

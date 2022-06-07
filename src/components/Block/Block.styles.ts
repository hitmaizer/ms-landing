import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

export const Block = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  ${gridGap}
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  padding: 32px;
  min-height: 160px;
`;

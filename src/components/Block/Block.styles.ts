import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Block = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  padding: 32px;
`;

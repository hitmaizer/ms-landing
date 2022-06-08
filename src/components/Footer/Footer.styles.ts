import { mediaQueries } from '@styles';
import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Footer = styled.div`
  ${flexbox}
  ${layout}
  ${space}
  width: 100%;
  flex-direction: column;

  ${mediaQueries.lg} {
    flex-direction: row;
    height: 18vh;
  }
`;

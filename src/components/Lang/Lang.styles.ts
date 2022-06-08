import { mediaQueries } from '@styles';
import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const Lang = styled.div`
  ${flexbox}
  ${space}
  ${layout}

  width: 100vw;
  flex-direction: row;
  order: -1;
  ${mediaQueries.lg} {
    width: 10vw;
    flex-direction: column;
    order: 0;
  }
`;

import { mediaQueries } from '@styles';
import styled from 'styled-components';

export const Bio = styled.div`
  width: 100vw;
  ${mediaQueries.lg} {
    width: 65vw;
  }

  ${mediaQueries.xxl} {
    width: 72vw;
  }
`;

import { mediaQueries } from '@styles';
import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88vh;

  ${mediaQueries.md} {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 58vh;
  }

  ${mediaQueries.lg} {
    height: 70vh;
  }
`;

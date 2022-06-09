import { mediaQueries } from '@styles';
import styled from 'styled-components';

export const Contact = styled.div`
  width: 100%;
  cursor: pointer;
  transition: color 300ms ease;
  width: 12.5vw;
  &:hover {
    p {
      color: ${({ theme }) => theme.colors.offWhite};
    }
  }

  display: none;
  ${mediaQueries.lg} {
    display: block;
  }

  ${mediaQueries.xxl} {
    width: 9vw;
  }
`;

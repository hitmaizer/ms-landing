import { mediaQueries } from '@styles';
import styled from 'styled-components';

export const Widget = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  ${mediaQueries.md} {
    display: block;
  }
`;

export const IFrame = styled.iframe`
  border: 0;
  height: 483px;
  z-index: 2;

  width: -webkit-fill-available;
  ${mediaQueries.sm} {
    height: 100%;
  }
`;

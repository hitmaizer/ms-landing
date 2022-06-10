import { mediaQueries } from '@styles';
import { rem } from 'src/hooks/useRem';
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
  height: ${rem(483)};
  z-index: 2;

  width: -webkit-fill-available;
  ${mediaQueries.sm} {
    height: 100%;
  }
`;

import { mediaQueries } from '@styles';
import styled from 'styled-components';

export const WidgetContainer = styled.div`
  display: block;
  width: 100%;

  ${mediaQueries.md} {
    display: none;
  }
`;

export const Widget = styled.iframe`
  border: 0;
  width: 100%;
  height: 120px;
`;

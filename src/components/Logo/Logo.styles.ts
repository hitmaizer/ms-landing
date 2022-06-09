import { mediaQueries } from '@styles';
import Image from 'next/image';
import styled from 'styled-components';

export const Logo = styled.div`
  width: 75vw;
  z-index: 10;
  ${mediaQueries.xxl} {
    width: 82vw;
  }
`;

export const SImage = styled(Image)`
  padding-left: 3% !important;
`;

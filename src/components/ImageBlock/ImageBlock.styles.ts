import { mediaQueries } from '@styles';
import Image from 'next/image';
import styled from 'styled-components';

export const ImageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  ${mediaQueries.md} {
    width: 53vw;
  }

  ${mediaQueries.lg} {
    width: 66vw;
  }

  ${mediaQueries.xl} {
    width: 75vw;
  }

  ${mediaQueries.xxl} {
    width: 82vw;
  }
`;

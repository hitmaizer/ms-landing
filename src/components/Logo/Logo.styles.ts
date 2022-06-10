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
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  position: relative;
  margin-left: 2%;
  min-width: 70%;
  ${mediaQueries.sm} {
    min-width: 50%;
  }
  ${mediaQueries.md} {
    min-width: 60%;
  }
  ${mediaQueries.lg} {
    min-width: 30%;
  }
`;

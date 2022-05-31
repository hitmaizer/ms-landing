import Image from 'next/image';
import styled from 'styled-components';

export const Hero = styled.section`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  background-color: black;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0.3477766106442577) 48%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  z-index: 2;
  margin-left: 40px;
`;

export const IFrame = styled.iframe`
  position: relative;
  border: 0;
  width: 500px;
  height: 500px;
  z-index: 2;
`;

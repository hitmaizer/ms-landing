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

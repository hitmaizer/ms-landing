import styled, { keyframes } from 'styled-components';

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const loaderInner = keyframes`
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purpleBg};
  z-index: 99;
`;

export const Loader = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid ${({ theme }) => theme.colors.offWhite};
  animation: ${loader} 2s infinite ease;
`;

export const LoaderInner = styled.div`
  vertical-align: top;
  width: 100%;
  background-color: #fff;
  animation: ${loaderInner} 2s infinite ease-in;
`;

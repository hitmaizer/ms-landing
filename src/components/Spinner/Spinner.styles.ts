import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%  { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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

export const Spinner = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.mutedGray};
  border-top: 16px solid ${({ theme }) => theme.colors.offWhite};
  border-radius: 50%;
  width: 130px;
  height: 130px;
  animation: ${spin} 2s infinite ease-in-out;
`;

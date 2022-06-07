import styled from 'styled-components';

export const Contact = styled.div`
  width: 100%;
  cursor: pointer;
  transition: color 300ms ease;
  width: 15vw;
  &:hover {
    p {
      color: ${({ theme }) => theme.colors.offWhite};
    }
  }
`;

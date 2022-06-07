import styled from 'styled-components';
import { Youtube, Instagram, Facebook } from '@styled-icons/boxicons-logos';
import { Bandcamp } from '@styled-icons/simple-icons';

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 25vw;
`;

export const YTLogo = styled(Youtube)`
  width: 32px;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

export const InstaLogo = styled(Instagram)`
  width: 32px;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

export const FBLogo = styled(Facebook)`
  width: 32px;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

export const BCLogo = styled(Bandcamp)`
  width: 32px;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

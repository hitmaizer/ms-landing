import styled from 'styled-components';
import { Youtube, Instagram, Facebook } from '@styled-icons/boxicons-logos';
import { Bandcamp } from '@styled-icons/simple-icons';
import { mediaQueries } from '@styles';
import { rem } from 'src/hooks/useRem';

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${rem(16)};
  width: 100vw;
  ${mediaQueries.lg} {
    width: 25vw;
  }

  ${mediaQueries.xxl} {
    width: 18vw;
  }
`;

export const YTLogo = styled(Youtube)`
  width: ${rem(32)};
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

export const InstaLogo = styled(Instagram)`
  width: ${rem(32)};
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

export const FBLogo = styled(Facebook)`
  width: ${rem(32)};
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

export const BCLogo = styled(Bandcamp)`
  width: ${rem(32)};
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
    transform: scale(105%);
  }
`;

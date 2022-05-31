import styled from 'styled-components';
import { Youtube, Instagram, Facebook } from '@styled-icons/boxicons-logos';
import { Bandcamp } from '@styled-icons/simple-icons';

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const YTLogo = styled(Youtube)`
  width: 32px;
  color: ${({ theme }) => theme.colors.gray50};
`;

export const InstaLogo = styled(Instagram)`
  width: 32px;
  color: ${({ theme }) => theme.colors.gray50};
`;

export const FBLogo = styled(Facebook)`
  width: 32px;
  color: ${({ theme }) => theme.colors.gray50};
`;

export const BCLogo = styled(Bandcamp)`
  width: 32px;
  color: ${({ theme }) => theme.colors.gray50};
`;

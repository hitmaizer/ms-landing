import styled from 'styled-components';

import { LinkTextProps } from './LinkText.types';

export const LinkText = styled.a<LinkTextProps>`
  color: ${({ theme }) => theme.colors.mutedGray};
  font-weight: ${({ href, pathName }) => (href === pathName ? 'bold' : '400')};
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.offWhite};
  }
`;

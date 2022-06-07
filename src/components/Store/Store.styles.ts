import { RightArrowAlt } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

export const Arrow = styled(RightArrowAlt)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: color 300ms ease;
`;

export const Store = styled.div`
  ${flexbox}
  ${space}
  ${layout}
  ${gridGap}
  width: 12.5vw;
  cursor: pointer;
  &:hover {
    p,
    ${Arrow} {
      color: ${({ theme }) => theme.colors.offWhite};
    }
  }
`;

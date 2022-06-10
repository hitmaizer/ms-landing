import { RightArrowAlt } from '@styled-icons/boxicons-regular';
import { mediaQueries } from '@styles';
import { rem } from 'src/hooks/useRem';
import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';
import { StoreProps } from './Store.types';

export const Arrow = styled(RightArrowAlt)<StoreProps>`
  width: ${({ mob }) => (mob === true ? rem(40) : rem(24))};
  height: ${({ mob }) => (mob === true ? rem(40) : rem(24))};
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

  display: none;
  ${mediaQueries.lg} {
    display: block;
  }

  ${mediaQueries.xxl} {
    width: 9vw;
  }
`;

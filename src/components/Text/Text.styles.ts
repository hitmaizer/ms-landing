import { rem } from 'src/hooks/useRem';
import styled, { css } from 'styled-components';
import { color, fontWeight, space, style, typography } from 'styled-system';

import { TextProps } from './Text.types';
import { size } from './Text.variants';

const textTransform = style({
  key: 'textTransform',
  cssProperty: 'textTransform',
  prop: 'textTransform',
});

export const Text = styled.p<TextProps>`
  ${size}
  ${color}
  ${typography}
  ${space}
  ${textTransform}
  ${fontWeight}

  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  max-width: 75ch;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: color 300ms ease;

  ${({ textBlock }) =>
    textBlock &&
    css`
      font-weight: 500;
      color: ${({ theme }) => theme.colors.mutedGray};
      line-height: 160%;
    `}

  ${({ mob }) =>
    mob &&
    css`
      font-size: ${rem(32)};
    `}

    &::selection {
    background-color: ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.purpleBg};
  }
`;

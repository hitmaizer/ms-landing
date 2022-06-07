import styled from 'styled-components';
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
  font-size: 16px;
  line-height: 24px;
  max-width: 900px;
  color: ${({ theme }) => theme.colors.mutedGray};
  transition: color 300ms ease;
`;

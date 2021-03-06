import { ReactNode } from 'react';

import { HeadingElement, TextElement } from 'src/styles';
import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export interface TextProps extends TypographyProps, SpaceProps, LayoutProps {
  as?: HeadingElement | TextElement | 'div';
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  color?: string;
  card?: boolean;
  textBlock?: boolean;
  mob?: boolean;
}

import { ReactNode } from 'react';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface FooterProps extends FlexboxProps, SpaceProps, LayoutProps {
  children?: ReactNode;
  open?: boolean;
}

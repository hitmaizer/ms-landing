import { ReactNode } from 'react';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface NavbarProps extends FlexboxProps, SpaceProps, LayoutProps {
  children?: ReactNode;
}

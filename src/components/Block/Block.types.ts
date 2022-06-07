import { ReactNode } from 'react';
import { FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export interface BlockProps extends FlexboxProps, SpaceProps, LayoutProps {
  children?: ReactNode;
}

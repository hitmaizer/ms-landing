import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  onClick: () => unknown;
  ident?: string | undefined;
  currLang?: string | undefined;
}

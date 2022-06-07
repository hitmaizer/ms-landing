import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  outline?: boolean;
  onClick: () => unknown;
  ident?: string | undefined;
  currLang?: string | undefined;
}

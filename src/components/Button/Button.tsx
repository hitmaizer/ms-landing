import React from 'react';
import { ButtonProps } from './Button.types';
import * as S from './Button.styles';

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;

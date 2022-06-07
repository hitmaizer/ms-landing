import React from 'react';
import Block from '../Block';
import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ children, ...rest }: LogoProps) => {
  return (
    <S.Logo {...rest}>
      <Block>
        <S.SImage src="/margins.svg" width="389px" height="20px" alt="logo" />
      </Block>
      {children}
    </S.Logo>
  );
};

export default Logo;

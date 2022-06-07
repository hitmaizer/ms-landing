import React from 'react';
import Block from '../Block';
import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ children, ...rest }: LogoProps) => {
  return (
    <S.Logo {...rest}>
      <Block>
        <S.SImage src="/msg-logo.svg" width="411px" height="20px" alt="logo" />
      </Block>
      {children}
    </S.Logo>
  );
};

export default Logo;

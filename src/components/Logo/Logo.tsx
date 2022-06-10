import React from 'react';
import Block from '../Block';
import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ children, ...rest }: LogoProps) => {
  return (
    <S.Logo {...rest}>
      <Block>
        <S.LogoContainer>
          <S.SImage src="/msg-logo.svg" alt="logo" layout="fill" />
        </S.LogoContainer>
      </Block>
      {children}
    </S.Logo>
  );
};

export default Logo;

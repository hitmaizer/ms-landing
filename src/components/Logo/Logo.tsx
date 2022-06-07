import React from 'react';
import Block from '../Block';
import Heading from '../Heading';
import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ children, ...rest }: LogoProps) => {
  return (
    <S.Logo {...rest}>
      <Block>
        <Heading size="lg" color="#F2F2F2">
          MÁRIO SANTOS GROUP
        </Heading>
      </Block>
      {children}
    </S.Logo>
  );
};

export default Logo;

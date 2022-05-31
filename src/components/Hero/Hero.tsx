import React from 'react';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  return <S.Hero {...rest}>{children}</S.Hero>;
};

export default Hero;

import React from 'react';
import ImageBlock from '../ImageBlock';
import MobWidget from '../MobWidget';
import WidgetBlock from '../WidgetBlock';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  return (
    <S.Hero {...rest}>
      <ImageBlock hero />
      <WidgetBlock hero />
      <MobWidget hero />
      {children}
    </S.Hero>
  );
};

export default Hero;

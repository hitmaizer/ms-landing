import React from 'react';
import ImageBlock from '../ImageBlock';
import Stack from '../Stack';
import WidgetBlock from '../WidgetBlock';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  return (
    <S.Hero {...rest}>
      <Stack display="flex" alignItems="center" height="100%">
        <ImageBlock hero />
        <WidgetBlock hero />
        {children}
      </Stack>
    </S.Hero>
  );
};

export default Hero;

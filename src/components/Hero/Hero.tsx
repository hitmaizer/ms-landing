import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import ImageBlock from '../ImageBlock';
import MobWidget from '../MobWidget';
import WidgetBlock from '../WidgetBlock';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  const isOpen = useSelector((state: RootState) => state.isOpen.isOpen);
  return (
    <S.Hero open={isOpen} {...rest}>
      <ImageBlock hero />
      <WidgetBlock hero />
      <MobWidget hero />
      {children}
    </S.Hero>
  );
};

export default Hero;

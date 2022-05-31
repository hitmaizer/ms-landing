import React from 'react';
import Button from '../Button';
import Heading from '../Heading';
import Stack from '../Stack';
import Text from '../Text';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  return (
    <S.Hero {...rest}>
      <S.StyledImage src="/placeholder.png" layout="fill" />
      <Stack display="flex" alignItems="center">
        <S.Content>
          <Heading color="#fff" fontWeight="bold" size="4xl">
            Headline 1
          </Heading>
          <Text fontWeight="bold" color="#fff">
            From the traditional jazz quartet with the guitar as a harmonic
            instrument, QMS looks for their own groundbreaking new sound. The
            main focus in this project is still giving free pass to the
            musicians to express themselves over the themes they&apos;re
            playing. The quartet was brought together under the musical empathy
            they achieve in their regular jams.
          </Text>
          <Button outline>BUY HERE</Button>
          {children}
        </S.Content>
        <S.IFrame
          src="https://bandcamp.com/EmbeddedPlayer/album=1733869251/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
          seamless
        >
          <a href="https://mariosantos.bandcamp.com/album/quarteto-m-rio-santos-n-vem">
            Quarteto Mário Santos - Núvem by Mário Santos
          </a>
        </S.IFrame>
      </Stack>
    </S.Hero>
  );
};

export default Hero;

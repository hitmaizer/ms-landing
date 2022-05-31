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
      <S.StyledImage src="/placeholder-overlay.png" layout="fill" />
      <Stack display="flex" alignItems="center">
        <S.Content>
          <Stack>
            <Heading color="#fff" size="4xl">
              QUARTETO
              <br /> MÁRIO SANTOS:
            </Heading>
            <Heading color="#fff" size="4xl" fontWeight="regular">
              BLOCO A4
            </Heading>
          </Stack>
          <Text fontWeight="bold" color="#fff">
            From the traditional jazz quartet with the guitar as a harmonic
            instrument, QMS looks for their own groundbreaking new sound. The
            main focus in this project is still giving free pass to the
            musicians to express themselves over the themes they&apos;re
            playing. The quartet was brought together under the musical empathy
            they achieve in their regular jams.
          </Text>
          <Button outline>
            <a
              href="https://mariosantos.bandcamp.com/album/quarteto-m-rio-santos-n-vem"
              target="_blank"
              rel="noreferrer"
            >
              BUY HERE
            </a>
          </Button>
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

import React from 'react';
import Block from '../Block';
import * as S from './Socials.styles';
import { SocialsProps } from './Socials.types';

const Socials = ({ children, ...rest }: SocialsProps) => {
  return (
    <S.Socials {...rest}>
      <Block
        display="flex"
        alignItems="center"
        justifyContent="center"
        gridGap="32px"
      >
        <a
          href="https://www.youtube.com/channel/UCPTVjhv0hpFRH9DGgdsOnwQ"
          target="_blank"
          rel="noreferrer"
        >
          <S.YTLogo />
        </a>
        <a
          href="https://www.instagram.com/mario_santos_group/"
          target="_blank"
          rel="noreferrer"
        >
          <S.InstaLogo />
        </a>
        <a
          href="https://mariosantos.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <S.BCLogo />
        </a>
        <a
          href="https://www.facebook.com/quartetomariosantos/"
          target="_blank"
          rel="noreferrer"
        >
          <S.FBLogo />
        </a>
      </Block>
      {children}
    </S.Socials>
  );
};

export default Socials;

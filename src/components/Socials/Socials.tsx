import React from 'react';
import * as S from './Socials.styles';
import { SocialsProps } from './Socials.types';

const Socials = ({ children, ...rest }: SocialsProps) => {
  return (
    <S.Socials {...rest}>
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
      {children}
    </S.Socials>
  );
};

export default Socials;

import React from 'react';
import Bio from '../Bio';
import Lang from '../Lang';
import Socials from '../Socials';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer = ({ children, ...rest }: FooterProps) => {
  return (
    <S.Footer display="flex" {...rest}>
      <Bio />
      <Lang />
      <Socials />
      {children}
    </S.Footer>
  );
};

export default Footer;

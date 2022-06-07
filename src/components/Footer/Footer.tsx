import React from 'react';
import Bio from '../Bio';
import Store from '../Store';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer = ({ children, ...rest }: FooterProps) => {
  return (
    <S.Footer display="flex" {...rest}>
      <Bio />
      <Store />
      {children}
    </S.Footer>
  );
};

export default Footer;

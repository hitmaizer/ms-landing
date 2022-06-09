import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import Bio from '../Bio';
import Lang from '../Lang';
import Socials from '../Socials';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer = ({ children, ...rest }: FooterProps) => {
  const isOpen = useSelector((state: RootState) => state.isOpen.isOpen);
  return (
    <S.Footer open={isOpen} display="flex" {...rest}>
      <Bio />
      <Lang />
      <Socials />
      {children}
    </S.Footer>
  );
};

export default Footer;

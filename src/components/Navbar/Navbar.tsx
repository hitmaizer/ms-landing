import React from 'react';
import { NavbarProps } from './Navbar.types';
import * as S from './Navbar.styles';
import Socials from '../Socials';
import Contact from '../Contact';
import Logo from '../Logo';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <Logo />
      <Socials />
      <Contact />
      {children}
    </S.Navbar>
  );
};

export default Navbar;

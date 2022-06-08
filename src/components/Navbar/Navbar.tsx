import React from 'react';
import { NavbarProps } from './Navbar.types';
import * as S from './Navbar.styles';
import Contact from '../Contact';
import Logo from '../Logo';
import Store from '../Store';
import HamburgerIcon from '../HamburgerIcon';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <Logo />
      <Contact />
      <Store />
      <HamburgerIcon />
      {children}
    </S.Navbar>
  );
};

export default Navbar;

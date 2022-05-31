import React from 'react';
import { NavbarProps } from './Navbar.types';
import * as S from './Navbar.styles';
import Heading from '../Heading';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <Heading size="2xl" color="#fff">
        MÁRIO SANTOS GROUP
      </Heading>
      {children}
    </S.Navbar>
  );
};

export default Navbar;

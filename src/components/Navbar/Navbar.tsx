import React from 'react';
import { NavbarProps } from './Navbar.types';
import * as S from './Navbar.styles';
import Heading from '../Heading';
import Stack from '../Stack';
import Socials from '../Socials';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <Stack display="flex" justifyContent="space-between" width="100%">
        <Heading size="2xl" color="#fff">
          MÁRIO SANTOS GROUP
        </Heading>
        <Socials />
      </Stack>
      {children}
    </S.Navbar>
  );
};

export default Navbar;

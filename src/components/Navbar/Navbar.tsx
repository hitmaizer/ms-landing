import React from 'react';
import { NavbarProps } from './Navbar.types';
import * as S from './Navbar.styles';
import Heading from '../Heading';
import Stack from '../Stack';
import Socials from '../Socials';
import Block from '../Block';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar {...rest}>
      <Stack display="flex">
        <Block>
          <Heading size="lg" color="#fff">
            MÁRIO SANTOS GROUP
          </Heading>
        </Block>
        <Block>
          <Socials />
        </Block>
      </Stack>

      {children}
    </S.Navbar>
  );
};

export default Navbar;

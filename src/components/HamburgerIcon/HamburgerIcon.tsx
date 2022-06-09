import React from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './HamburgerIcon.styles';
import { HamburgerIconProps } from './HamburgerIcon.types';
import { useTranslation } from 'react-i18next';
import Stack from '../Stack';
import { BCLogo, FBLogo, InstaLogo, YTLogo } from '../Socials/Socials.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setIsOpen } from 'src/redux/isOpen';

const HamburgerIcon = ({ children, ...rest }: HamburgerIconProps) => {
  const isOpen = useSelector((state: RootState) => state.isOpen.isOpen);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <S.Container>
        <Block center button onClick={() => dispatch(setIsOpen(!isOpen))}>
          <S.Hamburger open={isOpen} {...rest} />
        </Block>
      </S.Container>
      <S.HamburgerContent open={isOpen}>
        <Block center>
          <a href="mailto:maritosan@gmail.com">
            <Text textTransform="uppercase" fontWeight="600" mob width="100%">
              {t('contact')}
            </Text>
            {children}
          </a>
        </Block>
        <Block center>
          <a
            href="https://mariosantos.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Stack display="flex" gridGap="24px" alignItems="center">
              <Text textTransform="uppercase" fontWeight="bold" mob>
                {t('store')}
              </Text>
            </Stack>
          </a>
        </Block>
        <Block>
          <Stack
            display="flex"
            gridGap="24px"
            alignItems="center"
            width="100%"
            placeContent="center"
          >
            <a
              href="https://www.youtube.com/channel/UCPTVjhv0hpFRH9DGgdsOnwQ"
              target="_blank"
              rel="noreferrer"
            >
              <YTLogo />
            </a>
            <a
              href="https://www.instagram.com/mario_santos_group/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaLogo />
            </a>
            <a
              href="https://mariosantos.bandcamp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <BCLogo />
            </a>
            <a
              href="https://www.facebook.com/quartetomariosantos/"
              target="_blank"
              rel="noreferrer"
            >
              <FBLogo />
            </a>
          </Stack>
        </Block>
        {children}
      </S.HamburgerContent>
    </>
  );
};

export default HamburgerIcon;

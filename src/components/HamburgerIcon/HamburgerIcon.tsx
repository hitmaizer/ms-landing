import React, { useState } from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './HamburgerIcon.styles';
import { HamburgerIconProps } from './HamburgerICon.types';
import { useTranslation } from 'react-i18next';
import { Arrow } from '../Store/Store.styles';
import Stack from '../Stack';
import { BCLogo, FBLogo, InstaLogo, YTLogo } from '../Socials/Socials.styles';

const HamburgerIcon = ({ children, ...rest }: HamburgerIconProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <S.Container>
        <Block center button onClick={() => setIsOpen(!isOpen)}>
          <S.Hamburger open={isOpen} {...rest} />
        </Block>
      </S.Container>
      <S.HamburgerContent open={isOpen}>
        <a href="mailto:maritosan@gmail.com">
          <Text textTransform="uppercase" fontWeight="600" mob>
            {t('contact')}
          </Text>
          {children}
        </a>
        <a
          href="https://mariosantos.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Stack display="flex" gridGap="24px">
            <Text textTransform="uppercase" fontWeight="bold" mob>
              {t('store')}
            </Text>
            <Arrow mob />
          </Stack>
        </a>
        <Stack display="flex" gridGap="40px" alignItems="center">
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
        {children}

        {children}
      </S.HamburgerContent>
    </>
  );
};

export default HamburgerIcon;

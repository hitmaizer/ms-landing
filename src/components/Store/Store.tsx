import React from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './Store.styles';
import { StoreProps } from './Store.types';

const Store = ({ children, ...rest }: StoreProps) => {
  return (
    <S.Store {...rest}>
      <a
        href="https://mariosantos.bandcamp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Block
          display="flex"
          alignItems="center"
          gridGap="8px"
          justifyContent="center"
        >
          <Text textTransform="uppercase" fontWeight="bold">
            Store
          </Text>
          <S.Arrow />
          {children}
        </Block>
      </a>
    </S.Store>
  );
};

export default Store;

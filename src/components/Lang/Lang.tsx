import React from 'react';
import Block from '../Block';
import Button from '../Button';
import * as S from './Lang.styles';
import { LangProps } from './Lang.types';

const Lang = ({ children, ...rest }: LangProps) => {
  return (
    <S.Lang display="flex" flexDirection="column" {...rest}>
      <Block button>
        <Button>PT</Button>
      </Block>
      <Block button>
        <Button>EN</Button>
      </Block>
      {children}
    </S.Lang>
  );
};

export default Lang;

import React from 'react';
import * as S from './Block.styles';
import { BlockProps } from './Block.types';

const Block = ({ children, ...rest }: BlockProps) => {
  return <S.Block {...rest}>{children}</S.Block>;
};

export default Block;

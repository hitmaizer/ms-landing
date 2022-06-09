import { GlobalStyle } from '@styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import * as S from './Container.styles';
import { ContainerProps } from './Container.types';

const Container = ({ children, ...rest }: ContainerProps) => {
  const isOpen = useSelector((state: RootState) => state.isOpen.isOpen);
  return (
    <S.Container {...rest}>
      <GlobalStyle open={isOpen} />
      {children}
    </S.Container>
  );
};

export default Container;

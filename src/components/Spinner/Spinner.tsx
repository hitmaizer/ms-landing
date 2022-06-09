import React from 'react';
import * as S from './Spinner.styles';
import { SpinnerProps } from './Spinner.types';

const Spinner = ({ children, ...rest }: SpinnerProps) => {
  return (
    <S.Container {...rest}>
      <S.Loader>
        <S.LoaderInner />
        {children}
      </S.Loader>
    </S.Container>
  );
};

export default Spinner;

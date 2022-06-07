import React from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './Bio.styles';
import { BioProps } from './Bio.types';
import { useTranslation } from 'react-i18next';

const Bio = ({ children, ...rest }: BioProps) => {
  const { t } = useTranslation();
  return (
    <S.Bio {...rest}>
      <Block>
        <Text textBlock ml="2%">
          {t('bio')}
        </Text>
        {children}
      </Block>
    </S.Bio>
  );
};

export default Bio;

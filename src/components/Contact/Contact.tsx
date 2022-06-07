import React from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './Contact.styles';
import { ContactProps } from './Contact.types';
import { useTranslation } from 'react-i18next';

const Contact = ({ children, ...rest }: ContactProps) => {
  const { t } = useTranslation();
  return (
    <S.Contact {...rest}>
      <a href="mailto:maritosan@gmail.com">
        <Block display="flex" alignItems="center" justifyContent="center">
          <Text textTransform="uppercase" fontWeight="600">
            {t('contact')}
          </Text>
          {children}
        </Block>
      </a>
    </S.Contact>
  );
};

export default Contact;

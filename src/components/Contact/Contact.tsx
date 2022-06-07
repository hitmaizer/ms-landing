import React from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './Contact.styles';
import { ContactProps } from './Contact.types';

const Contact = ({ children, ...rest }: ContactProps) => {
  return (
    <S.Contact {...rest}>
      <a href="mailto:jose.sousalves@gmail.com">
        <Block display="flex" alignItems="center" justifyContent="center">
          <Text textTransform="uppercase">Get in touch</Text>
          {children}
        </Block>
      </a>
    </S.Contact>
  );
};

export default Contact;

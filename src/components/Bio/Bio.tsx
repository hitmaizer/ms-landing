import React from 'react';
import Block from '../Block';
import Text from '../Text';
import * as S from './Bio.styles';
import { BioProps } from './Bio.types';

const Bio = ({ children, ...rest }: BioProps) => {
  return (
    <S.Bio {...rest}>
      <Block>
        <Text fontWeight="bold" color="#fff">
          From the traditional jazz quartet with the guitar as a harmonic
          instrument, QMS looks for their own groundbreaking new sound. The main
          focus in this project is still giving free pass to the musicians to
          express themselves over the themes they&apos;re playing. The quartet
          was brought together under the musical empathy they achieve in their
          regular jams.
        </Text>
        {children}
      </Block>
    </S.Bio>
  );
};

export default Bio;

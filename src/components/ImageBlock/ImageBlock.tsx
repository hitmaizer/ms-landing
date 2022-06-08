import React from 'react';
import Block from '../Block';
import * as S from './ImageBlock.styles';
import { ImageBlockProps } from './ImageBlock.types';

const ImageBlock = ({ children, hero, ...rest }: ImageBlockProps) => {
  return (
    <S.ImageBlock {...rest}>
      <Block hero={hero}>
        <S.ImageContainer>
          <S.StyledImage src="/placeholder.png" layout="fill" />
        </S.ImageContainer>
        {children}
      </Block>
    </S.ImageBlock>
  );
};

export default ImageBlock;

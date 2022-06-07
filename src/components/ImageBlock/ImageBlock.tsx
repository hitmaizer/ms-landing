import React from 'react';
import Block from '../Block';
import Box from '../Box';
import * as S from './ImageBlock.styles';
import { ImageBlockProps } from './ImageBlock.types';

const ImageBlock = ({ children, hero, ...rest }: ImageBlockProps) => {
  return (
    <S.ImageBlock {...rest}>
      <Block hero={hero}>
        <Box width="75vw" height="100%" position="relative">
          <S.StyledImage src="/placeholder-overlay.png" layout="fill" />
        </Box>
        {children}
      </Block>
    </S.ImageBlock>
  );
};

export default ImageBlock;

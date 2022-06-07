import React from 'react';
import Block from '../Block';
import * as S from './WidgetBlock.styles';
import { WidgetBlockProps } from './WidgetBlock.types';

const WidgetBlock = ({ children, hero, ...rest }: WidgetBlockProps) => {
  return (
    <S.Widget {...rest}>
      <Block hero={hero}>
        <S.IFrame
          src="https://bandcamp.com/EmbeddedPlayer/album=1733869251/size=large/bgcol=000000/linkcol=F2F2F2/minimal=true/transparent=true/"
          seamless
        >
          <a href="https://mariosantos.bandcamp.com/album/quarteto-m-rio-santos-n-vem">
            Quarteto Mário Santos - Núvem by Mário Santos
          </a>
        </S.IFrame>
        {children}
      </Block>
    </S.Widget>
  );
};

export default WidgetBlock;

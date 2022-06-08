import React from 'react';
import Block from '../Block';
import * as S from './MobWidget.styles';
import { MobWidgetProps } from './MobWidget.types';

const MobWidget = ({ children, ...rest }: MobWidgetProps) => {
  return (
    <>
      <S.WidgetContainer {...rest}>
        <Block hero>
          <S.Widget
            src="https://bandcamp.com/EmbeddedPlayer/album=1733869251/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="https://mariosantos.bandcamp.com/album/quarteto-m-rio-santos-n-vem">
              Quarteto Mário Santos - Núvem by Mário Santos
            </a>
          </S.Widget>
          {children}
        </Block>
      </S.WidgetContainer>
    </>
  );
};

export default MobWidget;

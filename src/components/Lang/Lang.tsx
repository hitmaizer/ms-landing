import React, { useEffect, useState } from 'react';
import Block from '../Block';
import Button from '../Button';
import * as S from './Lang.styles';
import { LangProps } from './Lang.types';
import { useTranslation } from 'react-i18next';

const Lang = ({ children, ...rest }: LangProps) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string | undefined>('');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  return (
    <S.Lang display="flex" flexDirection="column" {...rest}>
      <Block button onClick={() => i18n.changeLanguage('pt')}>
        <Button ident="pt" currLang={currentLang}>
          PT
        </Button>
      </Block>
      <Block button onClick={() => i18n.changeLanguage('en')}>
        <Button ident="en" currLang={currentLang}>
          EN
        </Button>
      </Block>
      {children}
    </S.Lang>
  );
};

export default Lang;

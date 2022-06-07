import { GlobalStyle } from '@styles';
import theme from '@styles/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../src/styles/fonts';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsEn, translationsPt } from 'src/intl/intl';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    pt: { translation: translationsPt },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import { GlobalStyle } from '@styles';
import theme from '@styles/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../src/styles/fonts';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsEn, translationsPt } from 'src/intl/intl';

import { DefaultSeo } from 'next-seo';
import SEO from 'src/config/next-seo';
import Head from 'src/components/Head';
import { useRouter } from 'next/router';

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
  const { asPath } = useRouter();
  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://www.mariosantos.com.pt${page}`.split('?');
  return (
    <>
      <ThemeProvider theme={theme}>
        <DefaultSeo
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            type: 'website',
            site_name: 'Mário Santos Group',
          }}
          dangerouslySetAllPagesToNoIndex
          {...SEO}
        />
        <Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </Head>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

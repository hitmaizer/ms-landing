import { GlobalStyle } from '@styles';
import theme from '@styles/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import '../src/styles/fonts';

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

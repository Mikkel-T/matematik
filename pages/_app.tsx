import 'katex/dist/katex.min.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import Layout from '@components/Layout';

import '@styles/globals.css';

export default function Matematik({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

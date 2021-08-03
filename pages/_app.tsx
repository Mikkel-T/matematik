import { AppProps } from 'next/app';

import Layout from '@components/Layout';

import '@styles/globals.css';

export default function Matematik({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

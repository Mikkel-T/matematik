import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';

import Layout from '../components/Layout';

export default function Matematik({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

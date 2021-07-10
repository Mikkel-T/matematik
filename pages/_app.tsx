import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import Layout from '@components/Layout';

export default function Matematik({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

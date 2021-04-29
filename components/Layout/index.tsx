import { LayoutProps } from '@interfaces/index';
import pages from '@utils/pages';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const pageObj = pages.find((e) => e.path === router.pathname);
  return (
    <>
      <Head>
        <title>{pageObj ? pageObj.name : 'Matematik'}</title>
        <meta
          name="description"
          content={pageObj ? pageObj.description : 'Beregnere'}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <nav>
        <Header />
      </nav>
      <main className="text-center">{children}</main>
      <footer className="text-center">
        <Footer />
      </footer>
    </>
  );
}

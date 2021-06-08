import { LayoutProps } from '@interfaces/index';
import pages from '@utils/pages';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const pageObj = pages.find((e) => e.path === router.pathname);
  return (
    <>
      <NextSeo
        title={pageObj ? pageObj.name : 'Matematik'}
        description={pageObj && pageObj.description}
        openGraph={{
          title: pageObj ? pageObj.name : 'Matematik',
          description: pageObj && pageObj.description,
        }}
      />
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

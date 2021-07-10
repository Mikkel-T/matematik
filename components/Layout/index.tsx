import React from 'react';

import { LayoutProps } from '@interfaces/index';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
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

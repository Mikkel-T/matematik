import { NextSeo } from 'next-seo';

import List from '@components/List';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Geometri beregnere"
        description="En samling af geometri beregnere"
      />
      <List
        list={[
          {
            name: 'Areal af trekant ud fra sidelængder',
            path: 'heron',
          },
          {
            name: 'Cirkler',
            path: 'cirkel',
          },
          {
            name: 'Kvadrater',
            path: 'kvadrat',
          },
          {
            name: 'Trigonometri i retvinklede trekanter',
            path: 'trigonometri',
          },
        ]}
        title="Geometri Beregnere"
      />
    </>
  );
}

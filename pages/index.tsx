import List from '@components/List';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Matematik beregnere"
        description="En samling af mange forskellige matematiske værktøjer"
      />
      <List
        list={[
          {
            name: '1. gradsfunktion',
            path: '1-grad-funktion',
          },
          {
            name: '2. gradsfunktion',
            path: '2-grad-funktion',
          },
          {
            name: 'Geometri',
            path: 'geometri',
          },
          {
            name: 'Kombinatorik stikprøver',
            path: 'kombinatorik',
          },
          {
            name: 'Momsberegner',
            path: 'moms',
          },
          {
            name: 'Renters rente',
            path: 'renter',
          },
        ]}
        title="Beregnere"
      />
    </>
  );
}

import List from '@components/List';
import { frontPage } from '@utils/pages';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Matematik beregnere"
        description="En hjemmeside med mange forskellige matematiske værktøjer"
      />
      <List list={frontPage} title="Beregnere" />
    </>
  );
}

import List from '@components/List';
import SEO from '@components/SEO';

export default function Home() {
  return (
    <>
      <SEO
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

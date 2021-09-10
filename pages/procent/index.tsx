import List from '@components/List';
import SEO from '@components/SEO';

export default function Procent() {
  return (
    <>
      <SEO title="Procent beregnere" description="En samling af procent beregnere" />
      <List
        list={[
          {
            name: 'Hvad er hele tallet når x procent er y',
            path: 'hele-tallet',
          },
          {
            name: 'Hvor mange procent er x af y',
            path: 'x-af-y',
          },
          {
            name: 'Hvad er x procent af y',
            path: 'x-procent-af-y',
          },
        ]}
        title="Procent Beregnere"
      />
    </>
  );
}

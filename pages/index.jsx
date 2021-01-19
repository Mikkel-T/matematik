import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
  const pages = [
    { name: '2. gradsfunktion', path: '/2-grad-funktion' },
    { name: 'Renters rente', path: '/renter' },
  ];
  return (
    <div>
      <Head>
        <title>Beregnere</title>
      </Head>
      <h1 className={styles.title}>Beregnere</h1>
      <div className={styles.grid}>
        {pages.map((e) => (
          <a href={e.path} className={styles.card}>
            {e.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;

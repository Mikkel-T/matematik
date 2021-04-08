import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/footer.jsx';
import styles from '../styles/Home.module.css';

function Home() {
  const pages = [
    { name: '1. gradsfunktion', path: '/1-grad-funktion' },
    { name: '2. gradsfunktion', path: '/2-grad-funktion' },
    { name: 'Momsberegner', path: '/moms' },
    { name: 'Renters rente', path: '/renter' },
    { name: 'Trigonometri i retvinklede trekanter', path: '/trigonometri' },
  ];
  return (
    <div>
      <Head>
        <title>Beregnere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Beregnere</h1>
      <div className={styles.grid}>
        {pages.map((e, i) => (
          <Link href={e.path} key={i}>
            <a className={styles.card}>{e.name}</a>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

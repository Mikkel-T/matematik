import Head from 'next/head';

import Footer from '../components/footer.jsx';
import styles from '../styles/Home.module.css';

function Home() {
  const pages = [
    { name: '2. gradsfunktion', path: '/2-grad-funktion' },
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
          <a href={e.path} key={i} className={styles.card}>
            {e.name}
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

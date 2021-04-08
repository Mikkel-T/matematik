import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/Mikkel-T/matematik-nse">
        <a target="_blank" rel="noopener noreferrer">
          Open source
        </a>
      </Link>{' '}
      projekt lavet af{' '}
      <Link href="https://github.com/Mikkel-T">
        <a target="_blank" rel="noopener noreferrer">
          Mikkel Tønder
        </a>
      </Link>
      <div className={styles.disclaimer}>
        Selvom programmet bliver testet ofte, er der stadig en meget lille
        chance for at det kan give forkerte resultater i specifikke situationer.
        Jeg gør alt hvad jeg kan for hele tiden at finde de situationer og fikse
        fejlene, men hvis et resultat ser forkert ud, så regn det efter selv for
        at være sikker.
      </div>
    </div>
  );
}

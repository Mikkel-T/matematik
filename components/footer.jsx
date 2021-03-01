import styles from '../styles/Home.module.css';

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Mikkel-T/matematik-nse" target="_blank">
        Open source
      </a>{' '}
      projekt lavet af{' '}
      <a href="https://github.com/Mikkel-T" target="_blank">
        Mikkel Tønder
      </a>
      <div className={styles.disclaimer}>
        Selvom jeg har testet alle programmerne flere gange kan programmet give
        fejl i visse situationer. Jeg prøver hele tiden at finde fejl og fikse
        dem men hvis et resultat ser forkert ud, så regn det efter selv for at
        være sikker.
      </div>
    </div>
  );
}

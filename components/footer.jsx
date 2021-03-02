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
        Selvom programmet bliver testet ofte, er der stadig en
        meget lille chance for at det kan give forkerte resultater i
        specifikke situationer. Jeg gør alt hvad jeg kan for hele tiden at finde
        de situationer og fikse fejlene, men hvis et resultat ser forkert ud, så
        regn det efter selv for at være sikker.
      </div>
    </div>
  );
}

import styles from '../styles/Home.module.css';

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Mikkel-T/matematik" target="_blank">
        Open source
      </a>{' '}
      projekt lavet af{' '}
      <a href="https://github.com/Mikkel-T" target="_blank">
        Mikkel Tønder
      </a>
    </div>
  );
}

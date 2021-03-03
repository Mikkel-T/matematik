import styles from '../styles/Home.module.css';

export default function TopBar(props) {
  return (
    <div className={styles.topbar}>
      <a href="/">
        <span>&#8592;</span> Til startsiden
      </a>
    </div>
  );
}

import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function TopBar(props) {
  return (
    <div className={styles.topbar}>
      <Link href="/">
        <a><span>&#8592;</span> Til startsiden</a>
      </Link>
    </div>
  );
}

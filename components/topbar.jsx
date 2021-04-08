import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function TopBar(props) {
  return (
    <div className={styles.topbar}>
      <Link href="/">
        <a>
          <span>&#8592;</span> Til startsiden
        </a>
      </Link>
    </div>
  );
}

import styles from '../styles/Home.module.css';

export default function Fraction(props) {
  return (
    <div className={styles.frac}>
      <span>{props.t}</span>
      <span className={styles.symbol}>/</span>
      <span className={styles.bottom}>{props.n}</span>
    </div>
  );
}

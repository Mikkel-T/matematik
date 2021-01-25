import styles from '../styles/Home.module.css';
import Fraction from './fraction.jsx';

const tan = (x) => Math.tan((x * Math.PI) / 180);
const cos = (x) => Math.cos((x * Math.PI) / 180);
const sin = (x) => Math.sin((x * Math.PI) / 180);
const atan = (x) => (Math.atan(x) * 180) / Math.PI;
const acos = (x) => (Math.acos(x) * 180) / Math.PI;
const asin = (x) => (Math.asin(x) * 180) / Math.PI;

function sqrt(props) {
  return (
    <div className={styles.svar}>
      <b>{props.name}:</b> √{props.first}
      <sup>2</sup> {props.sign} {props.second}
      <sup>2</sup>
    </div>
  );
}

function inverse(props) {
  return (
    <div className={styles.svar}>
      <b>{props.name}:</b> {props.f}
      <sup>-1</sup>(<Fraction t={props.t} n={props.n} />)
    </div>
  );
}

function angle(props) {
  return (
    <div className={styles.svar}>
      <b>{props.name}:</b> 180 - 90 - {props.value}
    </div>
  );
}

function frac(props) {
  return (
    <div className={styles.svar}>
      <b>{props.name}:</b> <Fraction t={props.t} n={`${props.f}(${props.n})`} />
    </div>
  );
}

function multiply(props) {
  return (
    <div className={styles.svar}>
      <b>{props.name}:</b> {props.first} * {props.f}({props.second})
    </div>
  );
}

function inserted(props) {
  return (
    <div className={styles.svar}>
      <b>{props.name}:</b> {props.value} blev indtastet
    </div>
  );
}

function rightAngle() {
  return (
    <div className={styles.svar}>
      <b>C:</b> C er altid 90°
    </div>
  );
}

const calc = {
  sqrt,
  inverse,
  rightAngle,
  angle,
  frac,
  multiply,
  inserted,
};

export { tan, cos, sin, atan, acos, asin, calc };

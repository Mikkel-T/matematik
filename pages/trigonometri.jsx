import Head from 'next/head';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { copyToast, errorToast } from '../components/toasts.jsx';
import trig from '../styles/Trigonometri.module.css';
import { tan, cos, sin, atan, acos, asin, calc } from '../components/trig.jsx';
import { genTrigSvar } from '../components/svar.jsx';

function Home() {
  const [state, setState] = useState({
    warning: '',
    beregninger: null,
    resultLink: null,
    A: '',
    B: '',
    C: '90',
    a: '',
    b: '',
    c: '',
    active: [],
    A_readonly: false,
    B_readonly: false,
    a_readonly: false,
    b_readonly: false,
    c_readonly: false,
    showAnswer: false,
    A_svar: '',
    B_svar: '',
    C_svar: '',
    a_svar: '',
    b_svar: '',
    c_svar: '',
  });

  function calculate() {
    let notcorrect = [];
    if (isNaN(+state.A)) {
      notcorrect.push('A');
    }
    if (isNaN(+state.B)) {
      notcorrect.push('B');
    }
    if (isNaN(+state.a)) {
      notcorrect.push('a');
    }
    if (isNaN(+state.b)) {
      notcorrect.push('b');
    }
    if (isNaN(+state.c)) {
      notcorrect.push('c');
    }

    if (notcorrect[0]) {
      setState({
        ...state,
        warning: `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`,
        showAnswer: false,
        beregninger: null,
        resultLink: null,
      });
      errorToast('isNotNum', state.warning);
    } else {
      let int_a = +state.a;
      let int_b = +state.b;
      let int_c = +state.c;
      let int_A = +state.A;
      let int_B = +state.B;
      let int_C = +state.C;
      let svar = {};
      let beregninger_html;
      svar['C_svar'] = genTrigSvar('C', int_C);
      if (state.a !== '' && state.b !== '') {
        svar['A_svar'] = genTrigSvar('A', atan(int_a / int_b));
        svar['B_svar'] = genTrigSvar('B', atan(int_b / int_a));
        svar['a_svar'] = genTrigSvar('a', int_a);
        svar['b_svar'] = genTrigSvar('b', int_b);
        svar['c_svar'] = genTrigSvar(
          'c',
          Math.sqrt(Math.pow(int_a, 2) + Math.pow(int_b, 2))
        );
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.inverse name="A" f="tan" t={int_a} n={int_b} />
            <calc.inverse name="B" f="tan" t={int_b} n={int_a} />
            <calc.rightAngle />
            <calc.inserted name="a" value={int_a} />
            <calc.inserted name="b" value={int_b} />
            <calc.sqrt name="c" first={int_a} sign="+" second={int_b} />
          </div>
        );
      } else if (state.a !== '' && state.c !== '') {
        svar['A_svar'] = genTrigSvar('A', asin(int_a / int_c));
        svar['B_svar'] = genTrigSvar('B', acos(int_a / int_c));
        svar['a_svar'] = genTrigSvar('a', int_a);
        svar['b_svar'] = genTrigSvar(
          'b',
          Math.sqrt(Math.pow(int_c, 2) - Math.pow(int_a, 2))
        );
        svar['c_svar'] = genTrigSvar('c', int_c);
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.inverse name="A" f="sin" t={int_a} n={int_c} />
            <calc.inverse name="B" f="cos" t={int_a} n={int_c} />
            <calc.rightAngle />
            <calc.inserted name="a" value={int_a} />
            <calc.sqrt name="b" first={int_c} sign="-" second={int_a} />
            <calc.inserted name="c" value={int_c} />
          </div>
        );
      } else if (state.a !== '' && state.A !== '') {
        svar['A_svar'] = genTrigSvar('A', int_A);
        svar['B_svar'] = genTrigSvar('B', 180 - int_C - int_A);
        svar['a_svar'] = genTrigSvar('a', int_a);
        svar['b_svar'] = genTrigSvar('b', int_a / tan(int_A));
        svar['c_svar'] = genTrigSvar('c', int_a / sin(int_A));
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.inserted name="A" value={int_A} />
            <calc.angle name="B" value={int_A} />
            <calc.rightAngle />
            <calc.inserted name="a" value={int_a} />
            <calc.frac name="b" t={int_a} n={int_A} f="tan" />
            <calc.frac name="c" t={int_a} n={int_A} f="sin" />
          </div>
        );
      } else if (state.a !== '' && state.B !== '') {
        svar['A_svar'] = genTrigSvar('A', 180 - int_C - int_B);
        svar['B_svar'] = genTrigSvar('B', int_B);
        svar['a_svar'] = genTrigSvar('a', int_a);
        svar['b_svar'] = genTrigSvar('b', int_a * tan(int_B));
        svar['c_svar'] = genTrigSvar('c', int_a / cos(int_B));
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.angle name="A" value={int_B} />
            <calc.inserted name="B" value={int_B} />
            <calc.rightAngle />
            <calc.inserted name="a" value={int_a} />
            <calc.multiply name="b" first={int_a} f="tan" second={int_B} />
            <calc.frac name="c" t={int_a} n={int_B} f="cos" />
          </div>
        );
      } else if (state.b !== '' && state.c !== '') {
        svar['A_svar'] = genTrigSvar('A', acos(int_b / int_c));
        svar['B_svar'] = genTrigSvar('B', asin(int_b / int_c));
        svar['a_svar'] = genTrigSvar(
          'a',
          Math.sqrt(Math.pow(int_c, 2) - Math.pow(int_b, 2))
        );
        svar['b_svar'] = genTrigSvar('b', int_b);
        svar['c_svar'] = genTrigSvar('c', int_c);
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.inverse name="A" f="cos" t={int_b} n={int_c} />
            <calc.inverse name="B" f="sin" t={int_b} n={int_c} />
            <calc.rightAngle />
            <calc.sqrt name="a" first={int_c} sign="-" second={int_b} />
            <calc.inserted name="b" value={int_b} />
            <calc.inserted name="c" value={int_c} />
          </div>
        );
      } else if (state.b !== '' && state.A !== '') {
        svar['A_svar'] = genTrigSvar('A', int_A);
        svar['B_svar'] = genTrigSvar('B', 180 - int_C - int_A);
        svar['a_svar'] = genTrigSvar('a', int_b * tan(int_A));
        svar['b_svar'] = genTrigSvar('b', int_b);
        svar['c_svar'] = genTrigSvar('c', int_b / cos(int_A));
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.inserted name="A" value={int_A} />
            <calc.angle name="B" value={int_A} />
            <calc.rightAngle />
            <calc.multiply name="a" first={int_b} f="tan" second={int_A} />
            <calc.inserted name="b" value={int_b} />
            <calc.frac name="c" t={int_b} n={int_A} f="cos" />
          </div>
        );
      } else if (state.b !== '' && state.B !== '') {
        svar['A_svar'] = genTrigSvar('A', 180 - int_C - int_B);
        svar['B_svar'] = genTrigSvar('B', int_B);
        svar['a_svar'] = genTrigSvar('a', int_b / tan(int_B));
        svar['b_svar'] = genTrigSvar('b', int_b);
        svar['c_svar'] = genTrigSvar('c', int_b / sin(int_B));
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.angle name="A" value={int_B} />
            <calc.inserted name="B" value={int_B} />
            <calc.rightAngle />
            <calc.frac name="a" t={int_b} n={int_B} f="tan" />
            <calc.inserted name="b" value={int_b} />
            <calc.frac name="c" t={int_b} n={int_B} f="sin" />
          </div>
        );
      } else if (state.c !== '' && state.A !== '') {
        svar['A_svar'] = genTrigSvar('A', int_A);
        svar['B_svar'] = genTrigSvar('B', 180 - int_C - int_A);
        svar['a_svar'] = genTrigSvar('a', int_c * sin(int_A));
        svar['b_svar'] = genTrigSvar('b', int_c * cos(int_A));
        svar['c_svar'] = genTrigSvar('c', int_c);
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.inserted name="A" value={int_A} />
            <calc.angle name="B" value={int_A} />
            <calc.rightAngle />
            <calc.multiply name="a" first={int_c} f="sin" second={int_A} />
            <calc.multiply name="b" first={int_c} f="cos" second={int_A} />
            <calc.inserted name="c" value={int_c} />
          </div>
        );
      } else if (state.c !== '' && state.B !== '') {
        svar['A_svar'] = genTrigSvar('A', 180 - int_C - int_B);
        svar['B_svar'] = genTrigSvar('B', int_B);
        svar['a_svar'] = genTrigSvar('a', int_c * cos(int_B));
        svar['b_svar'] = genTrigSvar('b', int_c * sin(int_B));
        svar['c_svar'] = genTrigSvar('c', int_c);
        beregninger_html = (
          <div>
            <b>Beregninger:</b>
            <calc.angle name="A" value={int_B} />
            <calc.inserted name="B" value={int_B} />
            <calc.rightAngle />
            <calc.multiply name="a" first={int_c} f="cos" second={int_B} />
            <calc.multiply name="b" first={int_c} f="sin" second={int_B} />
            <calc.inserted name="c" value={int_c} />
          </div>
        );
      } else {
        setState({
          ...state,
          warning: 'Der er ikke nok tal til at kunne løse trekanten',
          showAnswer: false,
        });
        errorToast(
          'NotEnoughNums',
          'Der er ikke nok tal til at kunne løse trekanten'
        );
        return;
      }

      setState({
        ...state,
        warning: '',
        beregninger: beregninger_html,
        resultLink: null, //TODO Query params
        showAnswer: true,
        ...svar,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    calculate();
  }

  function handleChange(e) {
    let readonly = {};
    if (e.target.name.toLowerCase() !== e.target.name) {
      let tmp = false;
      if (e.target.value !== '') tmp = true;

      if (e.target.name === 'A') readonly[`B_readonly`] = tmp;
      else readonly[`A_readonly`] = tmp;

      if (state.a !== '') {
        readonly[`b_readonly`] = tmp;
        readonly[`c_readonly`] = tmp;
      } else if (state.b !== '') {
        readonly[`a_readonly`] = tmp;
        readonly[`c_readonly`] = tmp;
      } else if (state.c !== '') {
        readonly[`b_readonly`] = tmp;
        readonly[`a_readonly`] = tmp;
      }
    } else {
      let tmp = false;
      if (e.target.value !== '') tmp = true;

      if (state.A !== '' && e.target.name !== 'A') {
        readonly[`a_readonly`] = tmp;
        readonly[`b_readonly`] = tmp;
        readonly[`c_readonly`] = tmp;
      } else if (state.B !== '' && e.target.name !== 'B') {
        readonly[`a_readonly`] = tmp;
        readonly[`b_readonly`] = tmp;
        readonly[`c_readonly`] = tmp;
      } else if (state.a !== '' && e.target.name !== 'a') {
        readonly[`A_readonly`] = tmp;
        readonly[`B_readonly`] = tmp;
        readonly[`b_readonly`] = tmp;
        readonly[`c_readonly`] = tmp;
      } else if (state.b !== '' && e.target.name !== 'b') {
        readonly[`A_readonly`] = tmp;
        readonly[`B_readonly`] = tmp;
        readonly[`a_readonly`] = tmp;
        readonly[`c_readonly`] = tmp;
      } else if (state.c !== '' && e.target.name !== 'c') {
        readonly[`A_readonly`] = tmp;
        readonly[`B_readonly`] = tmp;
        readonly[`a_readonly`] = tmp;
        readonly[`b_readonly`] = tmp;
      }
      readonly[`${e.target.name}_readonly`] = false;
    }
    setState({
      ...state,
      [e.target.name]: e.target.value,
      ...readonly,
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Trigonometri i retvinklede trekanter</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.triangleWrapper}>
          <form className={trig.wrapper} onSubmit={handleSubmit}>
            <input
              type="number"
              step="any"
              name="A"
              id="A"
              value={state.A}
              readOnly={state.A_readonly}
              placeholder="Vinkel A"
              className={[trig.input, trig.left].join(' ')}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              step="any"
              name="b"
              id="b"
              value={state.b}
              readOnly={state.b_readonly}
              placeholder="Katete b"
              className={[trig.input, trig.leftcenter].join(' ')}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              step="any"
              name="c"
              id="c"
              value={state.c}
              readOnly={state.c_readonly}
              placeholder="Hypotenuse c"
              className={[trig.input, trig.hyp].join(' ')}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <svg width="500" height="300" className={styles.triangle}>
              <polygon points="3,3 3,297 497,297" />
              <polygon points="3,297 43,297 43,257 3,257" />
              <text x="15" y="100" className={styles.degreeText}>
                {state.A_svar}
              </text>
              <text x="350" y="280" className={styles.degreeText}>
                {state.B_svar}
              </text>
              <text x="48" y="252" className={styles.degreeText}>
                {state.C_svar}
              </text>
              <text x="175" y="280" className={styles.degreeText}>
                {state.a_svar}
              </text>
              <text x="15" y="180" className={styles.degreeText}>
                {state.b_svar}
              </text>
              <text x="200" y="180" className={styles.degreeText}>
                {state.c_svar}
              </text>
              <path d=" M 420 297 A 80 80 180 0 1 433 260" />
              <path d=" M 69 41 A 80 80 0 0 1 4 80" />
            </svg>
            <br />
            <input
              type="number"
              step="any"
              name="a"
              id="a"
              value={state.a}
              readOnly={state.a_readonly}
              placeholder="Katete a"
              className={trig.input}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              step="any"
              name="B"
              id="B"
              value={state.B}
              readOnly={state.B_readonly}
              placeholder="Vinkel B"
              className={[trig.input, trig.right].join(' ')}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input type="submit" value="Beregn" />
          </form>
          <br />
          <div className={styles.svar}>{state.warning}</div>
          <br />
          <div className={styles.svar}>{state.beregninger}</div>
          {state.resultLink && (
            <CopyToClipboard text={state.resultLink} onCopy={() => copyToast()}>
              <button className={styles.copyButton}>
                Kopier link til denne løsning
              </button>
            </CopyToClipboard>
          )}
        </div>
        <ToastContainer position="bottom-right" />
        <Footer />
      </main>
    </div>
  );
}

export default Home;

import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer } from 'react-toastify';

import Footer from '../components/footer.jsx';
import Fraction from '../components/fraction.jsx';
import Input from '../components/input.jsx';
import { copyToast, errorToast } from '../components/toasts.jsx';
import TopBar from '../components/topbar';
import styles from '../styles/Home.module.css';

function Home({ x_1, y_1, x_2, y_2 }) {
  const [state, setState] = useState({
    warning: '',
    a: null,
    b: null,
    funktionsForskrift: null,
    beregninger: null,
    resultLink: null,
    x_1,
    y_1,
    x_2,
    y_2,
  });

  function calculate() {
    let notcorrect = [];
    if (isNaN(+state.x_1)) {
      notcorrect.push('x_1');
    }

    if (isNaN(+state.y_1)) {
      notcorrect.push('y_1');
    }

    if (isNaN(+state.x_2)) {
      notcorrect.push('x_2');
    }

    if (isNaN(+state.y_2)) {
      notcorrect.push('y_2');
    }

    if (notcorrect[0]) {
      setState({
        ...state,
        warning: `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`,
        a: null,
        b: null,
        funktionsForskrift: null,
        beregninger: null,
        resultLink: null,
      });
      errorToast(
        'isNotNum',
        `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`
      );
    } else {
      let int_x_1 = +state.x_1;
      let int_y_1 = +state.y_1;
      let int_x_2 = +state.x_2;
      let int_y_2 = +state.y_2;

      const a = (int_y_2 - int_y_1) / (int_x_2 - int_x_1);
      const a_html = (
        <div>
          <b>a:</b> {a.toFixed(3)}
        </div>
      );

      const a_beregninger = (
        <div className={styles.svar}>
          <b>a:</b>{' '}
          <Fraction t={`${int_y_2}-${int_y_1}`} n={`${int_x_2}-${int_x_1}`} />
        </div>
      );

      const b = int_y_1 - int_x_1 * a;
      const b_html = (
        <div>
          <b>b:</b> {b.toFixed(3)}
        </div>
      );

      const b_beregninger = (
        <div className={styles.svar}>
          <b>b:</b> {int_y_1} - ({int_x_1} * {a.toFixed(3)})
        </div>
      );

      const funktionsForskrift_html = (
        <div>
          <b>Funktionsforskriften for linjen:</b> f(x) = {a.toFixed(3)}x{' '}
          {b > 0 ? '+' : '-'} {Math.abs(b).toFixed(3)}
        </div>
      );

      const beregninger_html = (
        <div>
          <b>Beregninger:</b>
          {a_beregninger}
          {b_beregninger}
        </div>
      );

      let params = [];
      if (state.x_1) {
        params.push({
          x_1: state.x_1,
        });
      }

      if (state.y_1) {
        params.push({
          y_1: state.y_1,
        });
      }

      if (state.x_2) {
        params.push({
          x_2: state.x_2,
        });
      }

      if (state.y_2) {
        params.push({
          y_2: state.y_2,
        });
      }

      params = params
        .map(
          (obj) =>
            `${encodeURIComponent(Object.keys(obj)[0])}=${encodeURIComponent(
              Object.values(obj)[0]
            )}`
        )
        .join('&');

      const resultLink = `${window.location.origin}${window.location.pathname}${
        params ? `?${params}` : ''
      }`;

      setState({
        ...state,
        warning: '',
        a: a_html,
        b: b_html,
        funktionsForskrift: funktionsForskrift_html,
        beregninger: beregninger_html,
        resultLink: resultLink,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    calculate();
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>1. gradsfunktioner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TopBar />
        <div className={styles.wrapper}>
          <form className={styles.numForm} onSubmit={handleSubmit}>
            <label>x for punkt 1:</label>
            <Input
              name="x_1"
              value={state.x_1}
              onChange={(e) => handleChange(e)}
              placeholder="x for punkt 1"
            />
            <br />
            <label>y for punkt 1:</label>
            <Input
              name="y_1"
              value={state.y_1}
              onChange={(e) => handleChange(e)}
              placeholder="y for punkt 1"
            />
            <br />
            <label>x for punkt 2:</label>
            <Input
              name="x_2"
              value={state.x_2}
              onChange={(e) => handleChange(e)}
              placeholder="x for punkt 2"
            />
            <br />
            <label>y for punkt 2:</label>
            <Input
              name="y_2"
              value={state.y_2}
              onChange={(e) => handleChange(e)}
              placeholder="y for punkt 2"
            />
            <br />
            <div>
              <div>
                Punkt 1: ({state.x_1 || 0}, {state.y_1 || 0})
              </div>
              <div>
                Punkt 2: ({state.x_2 || 0}, {state.y_2 || 0})
              </div>
            </div>
            <br />
            <input type="submit" value="Beregn" id="submit" />
          </form>
          <div className={styles.svar}>{state.warning}</div>
          <div className={styles.svar}>{state.a}</div>
          <div className={styles.svar}>{state.b}</div>
          <div className={styles.svar}>{state.funktionsForskrift}</div>
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

Home.getInitialProps = async ({ query }) => {
  const { x_1, y_1, x_2, y_2 } = query;

  return { x_1: x_1 || '', y_1: y_1 || '', x_2: x_2 || '', y_2: y_2 || '' };
};

export default Home;

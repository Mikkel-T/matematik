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
import { factorial } from '../utils';

function Home({ n, p }) {
  const [state, setState] = useState({
    warning: '',
    ordnet_med: null,
    ordnet_uden: null,
    uordnet_med: null,
    uordnet_uden: null,
    beregninger: null,
    resultLink: null,
    n,
    p,
  });

  function calculate() {
    let notcorrect = [];
    if (isNaN(+state.n)) {
      notcorrect.push('n');
    }
    if (isNaN(+state.p)) {
      notcorrect.push('p');
    }

    if (notcorrect[0]) {
      setState({
        ...state,
        warning: `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`,
        ordnet_med: null,
        ordnet_uden: null,
        uordnet_med: null,
        uordnet_uden: null,
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
      let int_n = +state.n;
      let int_p = +state.p;

      const ordnet_med = parseFloat(Math.pow(int_n, int_p).toFixed(3));
      const ordnet_med_html = (
        <div>
          <b>Ordnet med tilbagelægning:</b> {ordnet_med}
        </div>
      );

      const ordnet_med_beregninger = (
        <div className={styles.svar}>
          <b>Ordnet med tilbagelægning:</b> {int_n}
          <sup>{int_p}</sup>
        </div>
      );

      const ordnet_uden = parseFloat(
        (factorial(int_n) / factorial(int_n - int_p)).toFixed(3)
      );
      const ordnet_uden_html = (
        <div>
          <b>Ordnet uden tilbagelægning:</b> {ordnet_uden}
        </div>
      );

      const ordnet_uden_beregninger = (
        <div className={styles.svar}>
          <b>Ordnet uden tilbagelægning:</b>{' '}
          <Fraction t={`${int_n}!`} n={`(${int_n} - ${int_p})!`} />
        </div>
      );

      const uordnet_med = parseFloat(
        (
          factorial(int_n + int_p - 1) /
          (factorial(int_n - 1) * factorial(int_p))
        ).toFixed(3)
      );
      const uordnet_med_html = (
        <div>
          <b>Uordnet med tilbagelægning:</b> {uordnet_med}
        </div>
      );

      const uordnet_med_beregninger = (
        <div className={styles.svar}>
          <b>Uordnet med tilbagelægning:</b>{' '}
          <Fraction
            t={`(${int_n} + ${int_p} - 1)!`}
            n={`(${int_n} - 1)! * ${int_p}!`}
          />
        </div>
      );

      const uordnet_uden = parseFloat(
        (
          factorial(int_n) /
          (factorial(int_n - int_p) * factorial(int_p))
        ).toFixed(3)
      );
      const uordnet_uden_html = (
        <div>
          <b>Uordnet uden tilbagelægning:</b> {uordnet_uden}
        </div>
      );

      const uordnet_uden_beregninger = (
        <div className={styles.svar}>
          <b>Uordnet uden tilbagelægning:</b>{' '}
          <Fraction t={`${int_n}!`} n={`(${int_n} - ${int_p})! * ${int_p}!`} />
        </div>
      );

      const beregninger_html = (
        <div>
          <b>Beregninger:</b>
          {ordnet_med_beregninger}
          {ordnet_uden_beregninger}
          {uordnet_med_beregninger}
          {uordnet_uden_beregninger}
        </div>
      );

      let params = [];
      if (state.n) {
        params.push({
          n: state.n,
        });
      }

      if (state.p) {
        params.push({
          p: state.p,
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

        ordnet_med: ordnet_med_html,
        ordnet_uden: ordnet_uden_html,
        uordnet_med: uordnet_med_html,
        uordnet_uden: uordnet_uden_html,

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
        <title>Kombinatorik stikprøver</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TopBar />
        <div className={styles.wrapper}>
          <form className={styles.numForm} onSubmit={handleSubmit}>
            <label>
              n (antallet af muligheder, som en stikprøve udtages fra):
            </label>
            <Input name="n" value={state.n} onChange={(e) => handleChange(e)} />{' '}
            <br />
            <label>p (antallet pladser, som udvælges i stikprøven):</label>
            <Input
              name="p"
              value={state.p}
              onChange={(e) => handleChange(e)}
            />{' '}
            <br />
            <input type="submit" value="Beregn" id="submit" />
          </form>
          <div className={styles.svar}>{state.warning}</div>
          <div className={styles.svar}>{state.ordnet_med}</div>
          <div className={styles.svar}>{state.ordnet_uden}</div>
          <div className={styles.svar}>{state.uordnet_med}</div>
          <div className={styles.svar}>{state.uordnet_uden}</div>
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
  const { n, p } = query;

  return { n: n || '', p: p || '' };
};

export default Home;

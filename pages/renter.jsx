import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Footer from '../components/footer.jsx';
import Input from '../components/input.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { copyToast, errorToast } from '../components/toasts.jsx';

function Home({ K, r, n }) {
  const [state, setState] = useState({
    warning: '',
    Kn: null,
    beregninger: null,
    resultLink: null,
    K,
    r,
    n,
  });

  function calculate() {
    let notcorrect = [];
    if (isNaN(+state.K)) {
      notcorrect.push('K');
    }
    if (isNaN(+state.r)) {
      notcorrect.push('r');
    }
    if (isNaN(+state.n)) {
      notcorrect.push('n');
    }

    if (notcorrect[0]) {
      setState({
        ...state,
        warning: `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`,
        Kn: null,
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
      let int_K = +state.K;
      let int_r = +state.r;
      let int_n = +state.n;

      const Kn = int_K * Math.pow(1 + int_r, int_n);
      const Kn_html = (
        <div>
          <b>Kn:</b> {Kn}
        </div>
      );

      const Kn_beregninger = (
        <div className={styles.svar}>
          <b>Kn:</b> {int_K} * (1 + {int_r})<sup>{int_n}</sup>
        </div>
      );

      const beregninger_html = (
        <div>
          <b>Beregninger:</b>
          {Kn_beregninger}
        </div>
      );

      let params = [];
      if (state.K) {
        params.push({
          K: state.K,
        });
      }

      if (state.r) {
        params.push({
          r: state.r,
        });
      }

      if (state.n) {
        params.push({
          n: state.n,
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
        Kn: Kn_html,
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
        <title>Renters rente</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <form className={styles.numForm} onSubmit={handleSubmit}>
            <label>K (Startkapitalen):</label>
            <Input name="K" value={state.K} onChange={(e) => handleChange(e)} />
            <br />
            <label>r (Renten i decimaltal. F.eks. er 3% = 0.03):</label>
            <Input name="r" value={state.r} onChange={(e) => handleChange(e)} />
            <br />
            <label>n (Antal terminer):</label>
            <Input name="n" value={state.n} onChange={(e) => handleChange(e)} />
            <br />
            <input type="submit" value="Beregn" id="submit" />
          </form>
          <div className={styles.svar}>{state.warning}</div>
          <div className={styles.svar}>{state.Kn}</div>
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
  const { K, r, n } = query;

  return { K: K || '', r: r || '', n: n || '' };
};

export default Home;

import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from '../components/footer.jsx';
import Input from '../components/input.jsx';
import { errorToast } from '../components/toasts.jsx';
import TopBar from '../components/topbar';
import styles from '../styles/Home.module.css';

function Home() {
  const [state, setState] = useState({
    warning: '',
    Kn: null,
    beregninger: null,
    K: '',
    r: '',
    n: '',
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

      const Kn = (int_K * Math.pow(1 + int_r, int_n)).toFixed(3);
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

      setState({
        ...state,
        warning: '',
        Kn: Kn_html,
        beregninger: beregninger_html,
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
      </Head>

      <main className={styles.main}>
        <TopBar />
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
        </div>
        <ToastContainer position="bottom-right" />
        <Footer />
      </main>
    </div>
  );
}

export default Home;

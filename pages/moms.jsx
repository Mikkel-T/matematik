import 'react-toastify/dist/ReactToastify.css';

import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Footer from '../components/footer.jsx';
import Fraction from '../components/fraction.jsx';
import Input from '../components/input.jsx';
import { errorToast } from '../components/toasts.jsx';
import TopBar from '../components/topbar';
import styles from '../styles/Home.module.css';

function Home() {
  const [state, setState] = useState({
    warning: '',
    prisMedMoms: null,
    prisUdenMoms: null,
    beregninger: null,
    pris: '',
  });

  function calculate() {
    let notcorrect = [];
    if (isNaN(+state.pris)) {
      notcorrect.push('pris');
    }

    if (notcorrect[0]) {
      setState({
        ...state,
        warning: `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`,
        prisMedMoms: null,
        prisUdenMoms: null,
        beregninger: null,
      });
      errorToast(
        'isNotNum',
        `${notcorrect.join(', ')} er ikke ${
          notcorrect.length > 1 ? '' : 'et'
        } tal`
      );
    } else {
      let int_pris = +state.pris;

      const prisMedMoms = int_pris * 1.25;
      const prisMedMoms_html = (
        <div>
          <b>Pris Med Moms:</b> {prisMedMoms}
        </div>
      );

      const prisMedMoms_beregninger = (
        <div className={styles.svar}>
          <b>Pris Med Moms:</b> {int_pris} * 1.25
        </div>
      );

      const prisUdenMoms = int_pris / 1.25;
      const prisUdenMoms_html = (
        <div>
          <b>Pris uden Moms:</b> {prisUdenMoms}
        </div>
      );

      const prisUdenMoms_beregninger = (
        <div className={styles.svar}>
          <b>Pris uden Moms:</b> <Fraction t={int_pris} n={1.25} />
        </div>
      );

      const beregninger_html = (
        <div>
          <b>Beregninger:</b>
          {prisMedMoms_beregninger}
          {prisUdenMoms_beregninger}
        </div>
      );

      setState({
        ...state,
        warning: '',
        prisMedMoms: prisMedMoms_html,
        prisUdenMoms: prisUdenMoms_html,
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
        <title>Momsberegner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TopBar />
        <div className={styles.wrapper}>
          <form className={styles.numForm} onSubmit={handleSubmit}>
            <label>Pris:</label>
            <Input
              name="pris"
              value={state.pris}
              onChange={(e) => handleChange(e)}
              placeholder="Pris"
            />
            <br />
            <input
              type="submit"
              value="Beregn pris med og uden moms"
              id="submit"
            />
          </form>
          <div className={styles.svar}>{state.warning}</div>
          <div className={styles.svar}>{state.prisMedMoms}</div>
          <div className={styles.svar}>{state.prisUdenMoms}</div>
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

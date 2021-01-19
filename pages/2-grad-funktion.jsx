import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Fraction from '../components/fraction.jsx';
import Input from '../components/input.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Home({ a, b, c }) {
  const [state, setState] = useState({
    warning: '',
    D: null,
    Tp: null,
    Np: null,
    beregninger: null,
    resultLink: null,
    a,
    b,
    c,
  });

  function calculate() {
    let notcorrect = [];
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
        warning: `${notcorrect.join(' ')} er ikke et tal`,
        D: null,
        Tp: null,
        Np: null,
        beregninger: null,
        resultLink: null,
      });
    } else {
      let int_a = +state.a;
      let int_b = +state.b;
      let int_c = +state.c;

      const D = int_b * int_b - 4 * int_a * int_c;
      const D_html = (
        <div>
          <b>D:</b> {D}
        </div>
      );

      const Tp_x = (-int_b / (2 * int_a)).toFixed(3);
      const Tp_y = (-D / (4 * int_a)).toFixed(3);
      const Tp_html = (
        <div>
          <b>Tp:</b> ({Tp_x}, {Tp_y})
        </div>
      );

      let Np_html;
      if (D < 0) {
        Np_html = (
          <div>
            <b>Np:</b> Der er ikke nogle nulpunkter
          </div>
        );
      } else if (D === 0) {
        const Np = ((-int_b + Math.sqrt(D)) / 2) * int_a;
        Np_html = (
          <div>
            <b>Np:</b> ({Np}, 0)
          </div>
        );
      } else {
        const Np_1 = ((-int_b + Math.sqrt(D)) / (2 * int_a)).toFixed(3);
        const Np_2 = ((-int_b - Math.sqrt(D)) / (2 * int_a)).toFixed(3);
        Np_html = (
          <div>
            <b>Np:</b> ({Np_1}, 0) & ({Np_2}, 0)
          </div>
        );
      }

      const D_beregninger = (
        <div className={styles.svar}>
          <b>D:</b> {int_b}
          <sup>2</sup> - 4 * {int_a} * {int_c}
        </div>
      );

      const Tp_beregninger = (
        <div className={styles.svar}>
          <b>Tp:</b> (<Fraction t={-int_b} n={'2 * ' + int_a} />,{' '}
          <Fraction t={-D} n={'4 * ' + int_a} />)
        </div>
      );

      let Np_beregninger;

      if (D < 0) {
        Np_beregninger = (
          <div className={styles.svar}>
            <b>Np:</b> Der var ingen nulpunkter at beregne
          </div>
        );
      } else if (D === 0) {
        Np_beregninger = (
          <div className={styles.svar}>
            <b>Np:</b> (<Fraction t={`-${int_b} + √${D}`} n={`2 * ${int_a}`} />,
            0)
          </div>
        );
      } else {
        const Np_1_beregninger = (
          <div className={styles.svar}>
            <b>
              Np<sub>1</sub>:
            </b>{' '}
            (<Fraction t={`-${int_b} + √${D}`} n={`2 * ${int_a}`} />, 0)
          </div>
        );

        const Np_2_beregninger = (
          <div className={styles.svar}>
            <b>
              Np<sub>2</sub>:
            </b>{' '}
            (<Fraction t={`-${int_b} - √${D}`} n={`2 * ${int_a}`} />, 0)
          </div>
        );

        Np_beregninger = (
          <div className={styles.svar}>
            {Np_1_beregninger}
            {Np_2_beregninger}
          </div>
        );
      }

      const beregninger_html = (
        <div>
          <b>Beregninger:</b>
          {D_beregninger}
          {Tp_beregninger}
          {Np_beregninger}
        </div>
      );

      let params = [];
      if (state.a) {
        params.push({
          a: state.a,
        });
      }

      if (state.b) {
        params.push({
          b: state.b,
        });
      }

      if (state.c) {
        params.push({
          c: state.c,
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
        D: D_html,
        Tp: Tp_html,
        Np: Np_html,
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
    <div>
      <Head>
        <title>2. gradsfunktioner</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <form className={styles.numForm} onSubmit={handleSubmit}>
            <label>
              a (Tallet med et x<sup>2</sup> efter sig):
            </label>
            <Input name="a" value={state.a} onChange={(e) => handleChange(e)} />
            <br />
            <label>b (Tallet med et x efter sig):</label>
            <Input name="b" value={state.b} onChange={(e) => handleChange(e)} />
            <br />
            <label>c (Tallet uden noget efter sig):</label>
            <Input name="c" value={state.c} onChange={(e) => handleChange(e)} />
            <br />
            <input
              type="submit"
              value="Beregn"
              id="submit"
              onClick={handleSubmit}
            />
          </form>
          <div className={styles.svar}>{state.warning}</div>
          <div className={styles.svar}>{state.D}</div>
          <div className={styles.svar}>{state.Tp}</div>
          <div className={styles.svar}>{state.Np}</div>
          <br />
          <div className={styles.svar}>{state.beregninger}</div>
          {state.resultLink && (
            <CopyToClipboard text={state.resultLink}>
              <button className={styles.copyButton}>
                Kopier link til denne løsning
              </button>
            </CopyToClipboard>
          )}
        </div>
      </main>
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { a, b, c } = query;

  return { a: a || '', b: b || '', c: c || '' };
};

export default Home;

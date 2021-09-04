import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import P from '@utils/Parser';
import { frac } from '@utils/Tex';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Kombinatorik() {
  const [n, setn] = useState('');
  const [p, setp] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    {
      name: 'n',
      value: n,
      onChange: setn,
      label: 'n (antallet af muligheder, som en stikprøve udtages fra)',
    },
    {
      name: 'p',
      value: p,
      onChange: setp,
      label: 'p (antallet pladser, som udvælges i stikprøven)',
    },
  ];

  function calc() {
    const vars = { n, p };

    if (+p < 0) throw new Error('p må ikke være negativ');
    if (+n < +p) throw new Error('n skal være større end p');

    const ordnetMed = Calculate('n^p', vars);
    const ordnetUden = Calculate('n! / (n - p)!', vars);
    const uordnetMed = Calculate('(n + p - 1)! /((n - 1)! * p!)', vars);
    const uordnetUden = Calculate('n! /((n - p)! * p!)', vars);

    const ordnetMedCalc = `${P(n)}^{${P(p)}}`;
    const ordnetUdenCalc = frac({ t: `${P(n)}!`, n: `(${P(n)} - ${P(p)})!` });
    const uordnetMedCalc = frac({
      t: `(${P(n)} + ${P(p)} - 1)!`,
      n: `(${P(n)} - 1)! * ${P(p)}!`,
    });
    const uordnetUdenCalc = frac({
      t: `${P(n)}!`,
      n: `(${P(n)} - ${P(p)})! * ${P(p)}!`,
    });

    setAnswers([
      {
        name: 'Ordnet med tilbagelægning',
        answer: ordnetMed,
        calculation: ordnetMedCalc,
      },
      {
        name: 'Ordnet uden tilbagelægning',
        answer: ordnetUden,
        calculation: ordnetUdenCalc,
      },
      {
        name: 'Uordnet med tilbagelægning',
        answer: uordnetMed,
        calculation: uordnetMedCalc,
      },
      {
        name: 'Uordnet uden tilbagelægning',
        answer: uordnetUden,
        calculation: uordnetUdenCalc,
      },
    ]);
  }
  return (
    <>
      <SEO
        title="Kombinatorik beregner"
        description="En kombinatorik beregner til at beregne ordnede stikprøver med og uden tilbagelægning og uordnede stikprøver med og uden tilbagelægning"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

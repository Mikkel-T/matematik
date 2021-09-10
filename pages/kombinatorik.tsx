import { useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

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

    const ordnetMed = Calc('n^p', vars);
    const ordnetUden = Calc('n! / (n - p)!', vars);
    const uordnetMed = Calc('(n + p - 1)! /((n - 1)! * p!)', vars);
    const uordnetUden = Calc('n! /((n - p)! * p!)', vars);

    setAnswers([
      { name: 'Ordnet med tilbagelægning', ...ordnetMed },
      { name: 'Ordnet uden tilbagelægning', ...ordnetUden },
      { name: 'Uordnet med tilbagelægning', ...uordnetMed },
      { name: 'Uordnet uden tilbagelægning', ...uordnetUden },
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

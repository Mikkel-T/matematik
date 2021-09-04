import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import p from '@utils/Parser';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Renter() {
  const [K, setK] = useState('');
  const [r, setr] = useState('');
  const [n, setn] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    { name: 'K', value: K, onChange: setK, label: 'K (Startkapitalen)' },
    {
      name: 'r',
      value: r,
      onChange: setr,
      label: 'r (Renten i decimaltal. F.eks. er 3% = 0,03)',
    },
    { name: 'n', value: n, onChange: setn, label: 'n (Antal terminer)' },
  ];

  function calc() {
    const vars = { K, r, n };

    const Kn = Calculate('K * (1 + r)^n', vars);

    const KnCalc = `${p(K)} * (1 ${p(r, { n: '+' })})^{${p(n)}}`;

    setAnswers([
      {
        name: (
          <>
            K<sub>n</sub>
          </>
        ),
        answer: Kn,
        calculation: KnCalc,
      },
    ]);
  }
  return (
    <>
      <SEO
        title="Renters rente beregner"
        description="En renters rente beregner der udregner slutkapital ved hjælp af startkapital, rente og antal terminer"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

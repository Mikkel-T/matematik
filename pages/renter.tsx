import { useState } from 'react';

import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import { GetAnswer } from '@utils/math';

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

    const Kn = GetAnswer('K * (1 + r)^n', vars);

    setAnswers([
      {
        name: (
          <>
            K<sub>n</sub>
          </>
        ),
        ...Kn,
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

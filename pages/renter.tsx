import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import { AnswerProps, InputProps } from '@interfaces/index';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

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
    let int_K = +K;
    let int_r = +r;
    let int_n = +n;

    const Kn = ParseAnswer(int_K * Math.pow(1 + int_r, int_n));

    const KnCalc = (
      <>
        {int_K} * (1 + {int_r})<sup>{int_n}</sup>
      </>
    );

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
      <NextSeo
        title="Renters rente beregner"
        description="Beregn slutkapital ved hjælp af startkapital, rente og antal terminer"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

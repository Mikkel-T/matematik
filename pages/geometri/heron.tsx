import { useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Heron() {
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    { name: 'a', value: a, onChange: seta },
    { name: 'b', value: b, onChange: setb },
    { name: 'c', value: c, onChange: setc },
  ];

  function calc() {
    const vars = { a, b, c };

    const s = Calc('(a + b + c) / 2', vars);
    const areal = Calc('sqrt(s * (s - a) * (s - b) * (s - c))', {
      ...vars,
      s: +s['answer'],
    });

    setAnswers([
      { name: 's', ...s },
      {
        name: 'Areal',
        ...areal,
      },
    ]);
  }
  return (
    <>
      <SEO
        title="Herons formel beregner"
        description="En beregner der udregner arealet af en trekant ud fra dens sidelængder ved hjælp af herons formel"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

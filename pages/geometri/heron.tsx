import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
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

    const s = Calculate('(a + b + c) / 2', vars);
    const areal = Calculate('sqrt(s * (s - a) * (s - b) * (s - c))', {
      ...vars,
      s,
    });

    const sCalc = <Fraction t={`${a} + ${b} + ${c}`} n={2} />;
    const arealCalc = `√${s} * (${s} - ${a}) * (${s} - ${b}) * (${s} - ${c})`;

    setAnswers([
      { name: 's', answer: s, calculation: sCalc },
      {
        name: 'Areal',
        answer: areal,
        calculation: arealCalc,
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

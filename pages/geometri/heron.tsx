import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import p from '@utils/Parser';
import { sqrt, frac } from '@utils/Tex';

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

    const sCalc = frac({
      t: `${p(a)} ${p(b, { n: '+' })} ${p(c, { n: '+' })}`,
      n: 2,
    });
    const arealCalc = sqrt(
      `${p(s)} * (${p(s)} ${p(a, { n: '-' })}) * (${p(s)} ${p(b, {
        n: '-',
      })}) * (${p(s)} ${p(c, { n: '-' })})`
    );

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

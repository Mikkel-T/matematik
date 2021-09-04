import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import { Percent as Input } from '@components/Input';
import SEO from '@components/SEO';

import p from '@utils/Parser';

import { AnswerProps } from '@interfaces/index';

export default function X_procent_af_Y() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);

  function calc() {
    const vars = { x, y };

    const svar = Calculate('x * y / 100', vars);

    const svarCalc = `${p(x)} * ${p(y)} / 100`;

    setAnswers([{ name: 'Svar', answer: svar, calculation: svarCalc }]);
  }
  return (
    <>
      <SEO
        title="Hvad er x procent af y"
        description="En procent beregner der udregner hvilken andel en procent er af et tal"
      />
      <Calculator calculate={calc} answers={answers}>
        Hvad er <Input name="x" value={x} onChange={setX} /> procent af{' '}
        <Input name="y" value={y} onChange={setY} />
      </Calculator>
    </>
  );
}

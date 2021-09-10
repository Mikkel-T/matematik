import { useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import { Percent as Input } from '@components/Input';
import SEO from '@components/SEO';

import { AnswerProps } from '@interfaces/index';

export default function X_procent_af_Y() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);

  function calc() {
    const vars = { x, y };

    const svar = Calc('x * y / 100', vars);

    setAnswers([{ name: 'Svar', ...svar }]);
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

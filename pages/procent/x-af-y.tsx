import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import { Percent as Input } from '@components/Input';
import SEO from '@components/SEO';

import p from '@utils/Parser';

import { AnswerProps } from '@interfaces/index';

export default function X_af_Y() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);

  function calc() {
    const vars = { x, y };

    const svar = Calculate('x / y * 100', vars);

    const svarCalc = `${p(x)} / ${p(y)} * 100`;

    setAnswers([{ name: 'Svar', answer: svar + '\\%', calculation: svarCalc }]);
  }
  return (
    <>
      <SEO
        title="Hvor mange procent er x af y"
        description="En procent beregner der udregner hvilken procentdel et tal udgør af et andet"
      />
      <Calculator calculate={calc} answers={answers}>
        Hvor mange procent er <Input name="x" value={x} onChange={setX} /> af{' '}
        <Input name="y" value={y} onChange={setY} />
      </Calculator>
    </>
  );
}

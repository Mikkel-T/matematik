import { useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Funktion_1_grad() {
  const [x1, setx1] = useState('');
  const [x2, setx2] = useState('');
  const [y1, sety1] = useState('');
  const [y2, sety2] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    { name: 'x for punkt 1', value: x1, onChange: setx1 },
    { name: 'y for punkt 1', value: y1, onChange: sety1 },
    { name: 'x for punkt 2', value: x2, onChange: setx2 },
    { name: 'y for punkt 2', value: y2, onChange: sety2 },
  ];

  function calc() {
    const vars = { x1, x2, y1, y2 };

    if (+x2 === +x1) throw new Error('x for punkt 1 kan ikke være det samme som x for punkt 2');

    const a = Calc('(y2 - y1) / (x2 - x1)', vars);
    const b = Calc('y1 - x1 * a', { ...vars, a: +a['answer'] });

    setAnswers([
      { name: 'a', ...a },
      { name: 'b', ...b },
      {
        name: 'Funktionsforskriften for linjen',
        answer: `f(x) = ${a.answer}x ${+b.answer > 0 ? '+' : '-'} ${Math.abs(+b.answer)}`,
      },
    ]);
  }
  return (
    <>
      <SEO
        title="Funktionsforskrift for en 1. gradsfunktion"
        description="En 1. gradsfunktions beregner der udregner funktionsforskriften for en 1. gradsfunktion"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers}>
        <div>
          Punkt 1: ({x1 || 0}, {y1 || 0})
        </div>
        <div>
          Punkt 2: ({x2 || 0}, {y2 || 0})
        </div>
      </Calculator>
    </>
  );
}

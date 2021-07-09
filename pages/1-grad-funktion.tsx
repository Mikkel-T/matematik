import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import { abs } from 'mathjs';
import Fraction from '@components/Fraction';
import { AnswerProps, InputProps } from '@interfaces/index';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

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

    const a = Calculate('(y2 - y1) / (x2 - x1)', vars);
    const b = Calculate('y1 - x1 * a', { ...vars, a });

    const aCalc = <Fraction t={`${y2} - ${y1}`} n={`${x2} - ${x1}`} />;
    const bCalc = `${y1} - (${x1} * ${a})`;

    setAnswers([
      { name: 'a', answer: a, calculation: aCalc },
      { name: 'b', answer: b, calculation: bCalc },
      {
        name: 'Funktionsforskriften for linjen',
        answer: `f(x) = ${a}x ${b > 0 ? '+' : '-'} ${abs(b)}`,
      },
    ]);
  }
  return (
    <>
      <NextSeo
        title="Funktionsforskrift for en 1. gradsfunktion"
        description="Beregn funktionsforskriften for en 1. gradsfunktion"
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

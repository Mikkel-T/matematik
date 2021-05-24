import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import { AnswerProps, InputProps } from '@interfaces/index';
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
    const int_x1 = +x1;
    const int_x2 = +x2;
    const int_y1 = +y1;
    const int_y2 = +y2;

    const a = ParseAnswer((int_y2 - int_y1) / (int_x2 - int_x1));
    const b = ParseAnswer(int_y1 - int_x1 * a);

    const aCalc = (
      <Fraction t={`${int_y2} - ${int_y1}`} n={`${int_x2} - ${int_x1}`} />
    );
    const bCalc = `${int_y1} - (${int_x1} * ${a})`;

    setAnswers([
      { name: 'a', answer: a, calculation: aCalc },
      { name: 'b', answer: b, calculation: bCalc },
      {
        name: 'Funktionsforskriften for linjen',
        answer: `f(x) = ${a}x ${b > 0 ? '+' : '-'} ${Math.abs(b)}`,
      },
    ]);
  }
  return (
    <Calculator inputs={inputs} calculate={calc} answers={answers}>
      <div>
        Punkt 1: ({x1 || 0}, {y1 || 0})
      </div>
      <div>
        Punkt 2: ({x2 || 0}, {y2 || 0})
      </div>
    </Calculator>
  );
}

import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import { AnswerProps, InputProps } from '@interfaces/index';
import { useState } from 'react';

export default function Funktion() {
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    {
      name: 'a',
      value: a,
      onChange: seta,
      label: (
        <>
          a (Tallet med et x<sup>2</sup> efter sig)
        </>
      ),
    },
    {
      name: 'b',
      value: b,
      onChange: setb,
      label: 'b (Tallet med et x efter sig)',
    },
    {
      name: 'c',
      value: c,
      onChange: setc,
      label: 'c (Tallet uden noget efter sig)',
    },
  ];

  function calc() {
    const int_a = +a;
    const int_b = +b;
    const int_c = +c;

    const D = ParseAnswer(Math.pow(int_b, 2) - 4 * int_a * int_c);
    const Tp_x = ParseAnswer(-int_b / (2 * int_a));
    const Tp_y = ParseAnswer(-D / (4 * int_a));
    const Tp = `(${Tp_x}, ${Tp_y})`;

    const DCalc = (
      <>
        {int_b}
        <sup>2</sup> - 4 * {int_a} * {int_c}
      </>
    );
    const TpCalc = (
      <>
        (<Fraction t={-int_b} n={`2 * ${int_a}`} />,{' '}
        <Fraction t={-D} n={`4 * ${int_a}`} />)
      </>
    );

    let Np;
    let NpCalc;
    let Np1Calc;
    let Np2Calc;

    if (D < 0) {
      Np = 'Der er ikke nogle nulpunkter da D er under 0';
    } else if (D === 0) {
      const Np_x = ParseAnswer((-int_b + Math.sqrt(D)) / (2 * int_a));
      Np = `(${Np_x}, 0)`;
      NpCalc = (
        <>
          (<Fraction t={`${-int_b} + √${D}`} n={`2 * ${int_a}`} />, 0)
        </>
      );
    } else {
      const Np1_x = ParseAnswer((-int_b + Math.sqrt(D)) / (2 * int_a));
      const Np2_x = ParseAnswer((-int_b - Math.sqrt(D)) / (2 * int_a));
      Np = `(${Np1_x}, 0) & (${Np2_x}, 0)`;
      Np1Calc = (
        <>
          (<Fraction t={`${-int_b} + √${D}`} n={`2 * ${int_a}`} />, 0)
        </>
      );
      Np2Calc = (
        <>
          (<Fraction t={`${-int_b} - √${D}`} n={`2 * ${int_a}`} />, 0)
        </>
      );
    }

    setAnswers([
      { name: 'D', answer: D, calculation: DCalc },
      { name: 'Tp', answer: Tp, calculation: TpCalc },
      { name: 'Np', answer: Np, calculation: NpCalc },
      {
        name: (
          <>
            Np<sub>1</sub>
          </>
        ),
        calculation: Np1Calc,
      },
      {
        name: (
          <>
            Np<sub>2</sub>
          </>
        ),
        calculation: Np2Calc,
      },
    ]);
  }
  return <Calculator inputs={inputs} calculate={calc} answers={answers} />;
}

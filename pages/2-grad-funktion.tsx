import { useState } from 'react';

import { Calc, text } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Funktion_2_grad() {
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
    const vars = { a, b, c };

    const D = Calc('b^2 - 4 * a * c', vars);

    const Tp_x = Calc('-b / (2 * a)', vars);
    const Tp_y = Calc('-D / (4 * a)', { ...vars, D: D['answer'] });

    const Tp = `(${Tp_x.answer}, ${Tp_y.answer})`;
    const TpCalc = `(${Tp_x.calculation}, ${Tp_y.calculation})`;

    let Np;
    let NpCalc;
    let Np1Calc;
    let Np2Calc;

    if (+D.answer < 0) {
      Np = text('Der er ikke nogle nulpunkter da D er under 0');
    } else if (+D.answer === 0) {
      const Np_x = Calc('(-b + sqrt(D)) / (2 * a)', {
        ...vars,
        D: D['answer'],
      });

      Np = `(${Np_x.answer}, 0)`;
      NpCalc = `(${Np_x.calculation}, 0)`;
    } else {
      const Np1_x = Calc('(-b + sqrt(D)) / (2 * a)', {
        ...vars,
        D: D['answer'],
      });
      const Np2_x = Calc('(-b - sqrt(D)) / (2 * a)', {
        ...vars,
        D: D['answer'],
      });

      Np = `(${Np1_x.answer}, 0)~ \\&~ (${Np2_x.answer}, 0)`;
      Np1Calc = `(${Np1_x.calculation}, 0)`;
      Np2Calc = `(${Np2_x.calculation}, 0)`;
    }

    setAnswers([
      { name: 'D', ...D },
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
  return (
    <>
      <SEO
        title="2. gradsfunktion beregner"
        description="En 2. gradsfunktions beregner der udregner diskriminant, toppunkt og nulpunkter for en 2. gradsfunktion"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

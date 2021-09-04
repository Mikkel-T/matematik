import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import p from '@utils/Parser';
import { sqrt, frac, text } from '@utils/Tex';

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

    const D = Calculate('b^2 - 4 * a * c', vars);
    const Tp_x = Calculate('-b / (2 * a)', vars);
    const Tp_y = Calculate('-D / (4 * a)', { ...vars, D });
    const Tp = `(${Tp_x}, ${Tp_y})`;

    const DCalc = `${p(b)}^2 - 4 * ${p(a)} * ${p(c)}`;
    const TpCalc = `(${frac({ t: `${p(-b)}`, n: `2 * ${p(a)}` })}, ${frac({
      t: `${p(-D)}`,
      n: `4 * ${p(a)}`,
    })})`;

    let Np;
    let NpCalc;
    let Np1Calc;
    let Np2Calc;

    if (D < 0) {
      Np = text('Der er ikke nogle nulpunkter da D er under 0');
    } else if (D === 0) {
      const Np_x = Calculate('(-b + sqrt(D)) / (2 * a)', { ...vars, D });

      Np = `(${Np_x}, 0)`;
      NpCalc = `(${frac({
        t: `${p(-b)} + ${sqrt(p(D))}`,
        n: `2 * ${p(a)}`,
      })}, 0)`;
    } else {
      const Np1_x = Calculate('(-b + sqrt(D)) / (2 * a)', { ...vars, D });
      const Np2_x = Calculate('(-b - sqrt(D)) / (2 * a)', { ...vars, D });

      Np = `(${Np1_x}, 0)\\ \\&\\ (${Np2_x}, 0)`;
      Np1Calc = `(${frac({
        t: `${p(-b)} + ${sqrt(p(D))}`,
        n: `2 * ${p(a)}`,
      })}, 0)`;
      Np2Calc = `(${frac({
        t: `${p(-b)} - ${sqrt(p(D))}`,
        n: `2 * ${p(a)}`,
      })}, 0)`;
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

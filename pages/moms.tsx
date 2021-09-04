import { useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import p from '@utils/Parser';
import { frac } from '@utils/Tex';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Moms() {
  const [pris, setPris] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    { name: 'Pris', value: pris, onChange: setPris },
  ];

  function calc() {
    const vars = { pris };

    const prisMoms = Calculate('pris * 1.25', vars);
    const prisUdenMoms = Calculate('pris / 1.25', vars);

    const prisMomsCalc = `${p(pris)} * 1.25`;
    const prisUdenMomsCalc = frac({ t: p(pris), n: 1.25 });

    setAnswers([
      { name: 'Pris med moms', answer: prisMoms, calculation: prisMomsCalc },
      {
        name: 'Pris uden moms',
        answer: prisUdenMoms,
        calculation: prisUdenMomsCalc,
      },
    ]);
  }
  return (
    <>
      <SEO
        title="Moms beregner"
        description="En momsberegner der udregner en pris med og uden moms"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

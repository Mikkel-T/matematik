import { useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';

import { AnswerProps, InputProps } from '@interfaces/index';

export default function Moms() {
  const [pris, setPris] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [{ name: 'Pris', value: pris, onChange: setPris }];

  function calc() {
    const vars = { pris };

    const prisMoms = Calc('pris * 1.25', vars);
    const prisUdenMoms = Calc('pris / 1.25', vars);

    setAnswers([
      { name: 'Pris med moms', ...prisMoms },
      {
        name: 'Pris uden moms',
        ...prisUdenMoms,
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

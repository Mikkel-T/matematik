import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import { AnswerProps, InputProps } from '@interfaces/index';
import { useState } from 'react';

export default function Moms() {
  const [pris, setPris] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    { name: 'Pris', value: pris, onChange: setPris },
  ];

  function calc() {
    const int_pris = +pris;

    const prisMoms = ParseAnswer(int_pris * 1.25);
    const prisUdenMoms = ParseAnswer(int_pris / 1.25);

    const prisMomsCalc = `${int_pris} * 1.25`;
    const prisUdenMomsCalc = <Fraction t={int_pris} n={1.25} />;

    setAnswers([
      { name: 'Pris med moms', answer: prisMoms, calculation: prisMomsCalc },
      {
        name: 'Pris uden moms',
        answer: prisUdenMoms,
        calculation: prisUdenMomsCalc,
      },
    ]);
  }
  return <Calculator inputs={inputs} calculate={calc} answers={answers} />;
}

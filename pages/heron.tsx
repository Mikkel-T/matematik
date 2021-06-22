import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import { AnswerProps, InputProps } from '@interfaces/index';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function Heron() {
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    { name: 'a', value: a, onChange: seta },
    { name: 'b', value: b, onChange: setb },
    { name: 'c', value: c, onChange: setc },
  ];

  function calc() {
    const int_a = +a;
    const int_b = +b;
    const int_c = +c;

    const s = ParseAnswer((int_a + int_b + int_c) / 2);
    const areal = ParseAnswer(
      Math.sqrt(s * (s - int_a) * (s - int_b) * (s - int_c))
    );

    const sCalc = <Fraction t={`${a} + ${b} + ${c}`} n={2} />;
    const arealCalc = `√${s} * (${s} - ${a}) * (${s} - ${b}) * (${s} - ${c})`;

    setAnswers([
      { name: 's', answer: s, calculation: sCalc },
      {
        name: 'Areal',
        answer: areal,
        calculation: arealCalc,
      },
    ]);
  }
  return (
    <>
      <NextSeo
        title="Herons formel beregner"
        description="Beregn areal af en trekant ud fra dens sidelængder ved hjælp af herons formel"
      />
      <Calculator inputs={inputs} calculate={calc} answers={answers} />
    </>
  );
}

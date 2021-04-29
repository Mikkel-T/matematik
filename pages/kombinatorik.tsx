import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import { AnswerProps, InputProps } from '@interfaces/index';
import { factorial } from '@utils/index';
import { useState } from 'react';

export default function Kombinatorik() {
  const [n, setn] = useState('');
  const [p, setp] = useState('');
  const [answers, setAnswers] = useState<AnswerProps[]>([]);
  const inputs: InputProps[] = [
    {
      name: 'n',
      value: n,
      onChange: setn,
      label: 'n (antallet af muligheder, som en stikprøve udtages fra)',
    },
    {
      name: 'p',
      value: p,
      onChange: setp,
      label: 'p (antallet pladser, som udvælges i stikprøven)',
    },
  ];

  function calc() {
    const int_n = +n;
    const int_p = +p;

    const ordnetMed = ParseAnswer(Math.pow(int_n, int_p));
    const ordnetUden = ParseAnswer(factorial(int_n) / factorial(int_n - int_p));
    const uordnetMed = ParseAnswer(
      factorial(int_n + int_p - 1) / (factorial(int_n - 1) * factorial(int_p))
    );
    const uordnetUden = ParseAnswer(
      factorial(int_n) / (factorial(int_n - int_p) * factorial(int_p))
    );

    const ordnetMedCalc = (
      <>
        {int_n}
        <sup>{int_p}</sup>
      </>
    );
    const ordnetUdenCalc = (
      <Fraction t={`${int_n}!`} n={`(${int_n} - ${int_p})!`} />
    );
    const uordnetMedCalc = (
      <Fraction
        t={`(${int_n} + ${int_p} - 1)!`}
        n={`(${int_n} - 1)! * ${int_p}!`}
      />
    );
    const uordnetUdenCalc = (
      <Fraction t={`${int_n}!`} n={`(${int_n} - ${int_p})! * ${int_p}!`} />
    );

    setAnswers([
      {
        name: 'Ordnet med tilbagelægning',
        answer: ordnetMed,
        calculation: ordnetMedCalc,
      },
      {
        name: 'Ordnet uden tilbagelægning',
        answer: ordnetUden,
        calculation: ordnetUdenCalc,
      },
      {
        name: 'Uordnet med tilbagelægning',
        answer: uordnetMed,
        calculation: uordnetMedCalc,
      },
      {
        name: 'Uordnet uden tilbagelægning',
        answer: uordnetUden,
        calculation: uordnetUdenCalc,
      },
    ]);
  }
  return <Calculator inputs={inputs} calculate={calc} answers={answers} />;
}

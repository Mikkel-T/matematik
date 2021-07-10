import { max } from 'mathjs';
import { NextSeo } from 'next-seo';
import { ChangeEvent, useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import Svg, { Input, Path, Text } from '@components/Svg';
import {
  AngleCalc,
  FracCalc,
  InverseCalc,
  MultiplyCalc,
  SqrtCalc,
} from '@components/TrigCalc';

import { AnswerProps } from '@interfaces/index';

export default function Trigonometri() {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
  const [calculations, setCalculations] = useState<AnswerProps[]>([]);
  const [answers, setAnswers] = useState<Record<string, string | number>>({
    A: '',
    B: '',
    a: '',
    b: '',
    c: '',
  });
  const [readonly, setReadonly] = useState({
    A: false,
    B: false,
    a: false,
    b: false,
    c: false,
  });

  function calc() {
    const vars = { a, b, c, A, B, C: 90 };

    const answer: Record<string, string | number> = {
      A: '',
      B: '',
      a: '',
      b: '',
      c: '',
    };
    const A_calc: AnswerProps = { name: 'A' };
    const B_calc: AnswerProps = { name: 'B' };
    const a_calc: AnswerProps = { name: 'a' };
    const b_calc: AnswerProps = { name: 'b' };
    const c_calc: AnswerProps = { name: 'c' };

    if (A !== '') {
      answer['A'] = Calculate('A', vars);
      A_calc.calculation = `${A} blev indtastet`;
    }

    if (B !== '') {
      answer['B'] = Calculate('B', vars);
      B_calc.calculation = `${B} blev indtastet`;
    }

    if (a !== '') {
      answer['a'] = Calculate('a', vars);
      a_calc.calculation = `${a} blev indtastet`;
    }

    if (b !== '') {
      answer['b'] = Calculate('b', vars);
      b_calc.calculation = `${b} blev indtastet`;
    }

    if (c !== '') {
      answer['c'] = Calculate('c', vars);
      c_calc.calculation = `${c} blev indtastet`;
    }

    if (a !== '' && b !== '') {
      answer['A'] = Calculate('atan(a / b) * 180 / pi', vars);
      answer['B'] = Calculate('atan(b / a) * 180 / pi', vars);
      answer['c'] = Calculate('sqrt(a^2 + b^2)', vars);

      A_calc.calculation = <InverseCalc f="tan" t={a} n={b} />;
      B_calc.calculation = <InverseCalc f="tan" t={b} n={a} />;
      c_calc.calculation = <SqrtCalc first={a} sign="+" second={b} />;
    } else if (a !== '' && c !== '') {
      answer['A'] = Calculate('asin(a / c) * 180 / pi', vars);
      answer['B'] = Calculate('acos(a / c) * 180 / pi', vars);
      answer['b'] = Calculate('sqrt(c^2 - a^2)', vars);

      A_calc.calculation = <InverseCalc f="sin" t={a} n={c} />;
      B_calc.calculation = <InverseCalc f="cos" t={a} n={c} />;
      b_calc.calculation = <SqrtCalc first={c} sign="-" second={a} />;
    } else if (a !== '' && A !== '') {
      answer['B'] = Calculate('180 - C - A', vars);
      answer['b'] = Calculate('a / tan(A deg)', vars);
      answer['c'] = Calculate('a / sin(A deg)', vars);

      B_calc.calculation = <AngleCalc value={A} />;
      b_calc.calculation = <FracCalc f="tan" t={a} n={A} />;
      c_calc.calculation = <FracCalc f="sin" t={a} n={A} />;
    } else if (a !== '' && B !== '') {
      answer['A'] = Calculate('180 - C - B', vars);
      answer['b'] = Calculate('a * tan(B deg)', vars);
      answer['c'] = Calculate('a / cos(B deg)', vars);

      A_calc.calculation = <AngleCalc value={B} />;
      b_calc.calculation = <MultiplyCalc first={a} f="tan" second={B} />;
      c_calc.calculation = <FracCalc t={a} n={B} f="cos" />;
    } else if (b !== '' && c !== '') {
      answer['A'] = Calculate('acos(b / c) * 180 / pi', vars);
      answer['B'] = Calculate('asin(b / c) * 180 / pi', vars);
      answer['a'] = Calculate('sqrt(c^2 - b^2)', vars);

      A_calc.calculation = <InverseCalc f="cos" t={b} n={c} />;
      B_calc.calculation = <InverseCalc f="sin" t={b} n={c} />;
      a_calc.calculation = <SqrtCalc first={c} sign="-" second={b} />;
    } else if (b !== '' && A !== '') {
      answer['B'] = Calculate('180 - C - A', vars);
      answer['a'] = Calculate('b * tan(A deg)', vars);
      answer['c'] = Calculate('b / cos(A deg)', vars);

      B_calc.calculation = <AngleCalc value={A} />;
      a_calc.calculation = <MultiplyCalc first={b} f="tan" second={A} />;
      c_calc.calculation = <FracCalc t={b} n={A} f="cos" />;
    } else if (b !== '' && B !== '') {
      answer['A'] = Calculate('180 - C - B', vars);
      answer['a'] = Calculate('b / tan(B deg)', vars);
      answer['c'] = Calculate('b / sin(B deg)', vars);

      A_calc.calculation = <AngleCalc value={B} />;
      a_calc.calculation = <FracCalc t={b} n={B} f="tan" />;
      c_calc.calculation = <FracCalc t={b} n={B} f="sin" />;
    } else if (c !== '' && A !== '') {
      answer['B'] = Calculate('180 - C - A', vars);
      answer['a'] = Calculate('c * sin(A deg)', vars);
      answer['b'] = Calculate('c * cos(A deg)', vars);

      B_calc.calculation = <AngleCalc value={A} />;
      a_calc.calculation = <MultiplyCalc first={c} f="sin" second={A} />;
      b_calc.calculation = <MultiplyCalc first={c} f="cos" second={A} />;
    } else if (c !== '' && B !== '') {
      answer['A'] = Calculate('180 - C - B', vars);
      answer['a'] = Calculate('c * cos(B deg)', vars);
      answer['b'] = Calculate('c * sin(B deg)', vars);

      A_calc.calculation = <AngleCalc value={B} />;
      a_calc.calculation = <MultiplyCalc first={c} f="cos" second={B} />;
      b_calc.calculation = <MultiplyCalc first={c} f="sin" second={B} />;
    } else {
      throw new Error(
        'Du har ikke indtastet nok tal til at trekanten kan beregnes'
      );
    }
    setCalculations([
      A_calc,
      B_calc,
      { name: 'C', calculation: 'C er altid 90°' },
      a_calc,
      b_calc,
      c_calc,
    ]);
    setAnswers(answer);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const readonlyTmp = {
      A: readonly.A,
      B: readonly.B,
      a: readonly.a,
      b: readonly.b,
      c: readonly.c,
    };
    if (e.target.name.toLowerCase() !== e.target.name) {
      let tmp = false;
      if (+e.target.value >= 90) return;
      if (e.target.value !== '') tmp = true;

      if (e.target.name === 'A') readonlyTmp['B'] = tmp;
      else readonlyTmp['A'] = tmp;

      if (a !== '') {
        readonlyTmp['b'] = tmp;
        readonlyTmp['c'] = tmp;
      } else if (b !== '') {
        readonlyTmp['a'] = tmp;
        readonlyTmp['c'] = tmp;
      } else if (c !== '') {
        readonlyTmp['b'] = tmp;
        readonlyTmp['a'] = tmp;
      }
    } else {
      let tmp = false;
      if (e.target.value !== '') tmp = true;

      if (A !== '' && e.target.name !== 'A') {
        readonlyTmp['a'] = tmp;
        readonlyTmp['b'] = tmp;
        readonlyTmp['c'] = tmp;
      } else if (B !== '' && e.target.name !== 'B') {
        readonlyTmp['a'] = tmp;
        readonlyTmp['b'] = tmp;
        readonlyTmp['c'] = tmp;
      } else if (a !== '' && e.target.name !== 'a') {
        readonlyTmp['A'] = tmp;
        readonlyTmp['B'] = tmp;
        readonlyTmp['b'] = tmp;
        readonlyTmp['c'] = tmp;
      } else if (b !== '' && e.target.name !== 'b') {
        readonlyTmp['A'] = tmp;
        readonlyTmp['B'] = tmp;
        readonlyTmp['a'] = tmp;
        readonlyTmp['c'] = tmp;
      } else if (c !== '' && e.target.name !== 'c') {
        readonlyTmp['A'] = tmp;
        readonlyTmp['B'] = tmp;
        readonlyTmp['a'] = tmp;
        readonlyTmp['b'] = tmp;
      }
    }
    switch (e.target.name) {
      case 'A':
        readonlyTmp[e.target.name] = false;
        setA(e.target.value);
        break;
      case 'B':
        readonlyTmp[e.target.name] = false;
        setB(e.target.value);
        break;
      case 'a':
        readonlyTmp[e.target.name] = false;
        seta(e.target.value);
        break;
      case 'b':
        readonlyTmp[e.target.name] = false;
        setb(e.target.value);
        break;
      case 'c':
        readonlyTmp[e.target.name] = false;
        setc(e.target.value);
        break;
    }
    setReadonly(readonlyTmp);
  }
  return (
    <>
      <NextSeo
        title="Trigonometri beregner"
        description="En trigonometri beregner der udregner alle sider og vinkler i en retvinklet trekant ved hjælp af trigonometri og pythagoras"
      />
      <Calculator calculate={calc} answers={calculations}>
        <div className="text-center w-[750px] m-auto h-[440px] pl-12">
          <Input
            name="A"
            value={A}
            readOnly={readonly['A']}
            placeholder="Vinkel A"
            className="border-nord12 focus:ring-nord12 focus:border-nord12 float-left ml-16"
            onChange={handleChange}
          />
          <Input
            name="b"
            value={b}
            readOnly={readonly['b']}
            placeholder="Katete b"
            className="float-left mt-48 -mb-44 ml-[-253px] border-nord9 focus:ring-nord9 focus:border-nord9"
            onChange={handleChange}
          />
          <Input
            name="c"
            value={c}
            readOnly={readonly['c']}
            placeholder="Hypotenuse c"
            className="border-nord14 focus:ring-nord14 focus:border-nord14 absolute mt-40 -ml-20"
            onChange={handleChange}
            min={max(+a || 0, +b || 0)}
          />
          <Svg width="500" height="300">
            <Path d="M 3 257 h 40 v 40" className="text-nord14" />
            <Path
              d="M 420 297 A 80 80 180 0 1 433 260"
              className="text-nord9"
            />
            <Path d="M 69 41 A 80 80 0 0 1 4 80" className="text-nord12" />

            <Path d="M 3 3 V 297" className="text-nord9" />
            <Path d="M 3 297 H 497" className="text-nord12" />
            <Path d="M 3 3 L 497 297" className="text-nord14" />

            <Text x="15" y="100" text={answers.A && `A: ${answers.A}°`} />
            <Text x="350" y="280" text={answers.B && `B: ${answers.B}°`} />
            <Text x="48" y="252" text="C: 90°" />
            <Text x="175" y="280" text={answers.a && `a: ${answers.a}`} />
            <Text x="15" y="180" text={answers.b && `b: ${answers.b}`} />
            <Text x="200" y="180" text={answers.c && `c: ${answers.c}`} />
          </Svg>
          <Input
            name="a"
            value={a}
            readOnly={readonly['a']}
            placeholder="Katete a"
            className="border-nord12 focus:ring-nord12 focus:border-nord12 -mr-24"
            onChange={handleChange}
          />
          <Input
            name="B"
            value={B}
            readOnly={readonly['B']}
            placeholder="Vinkel B"
            className="border-nord9 focus:ring-nord9 focus:border-nord9 float-right mr-8"
            onChange={handleChange}
          />
        </div>
      </Calculator>
    </>
  );
}

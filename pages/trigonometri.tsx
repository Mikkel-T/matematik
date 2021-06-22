import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Svg, { Input, Path, Text } from '@components/Svg';
import { acos, asin, atan, cos, sin, tan } from '@components/Trig';
import {
  AngleCalc,
  FracCalc,
  InverseCalc,
  MultiplyCalc,
  SqrtCalc,
} from '@components/TrigCalc';
import { AnswerProps } from '@interfaces/index';
import { NextSeo } from 'next-seo';
import { ChangeEvent, useState } from 'react';

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
    let int_a = +a;
    let int_b = +b;
    let int_c = +c;
    let int_A = +A;
    let int_B = +B;
    let int_C = 90;

    let answer: Record<string, string | number> = {
      A: '',
      B: '',
      a: '',
      b: '',
      c: '',
    };
    let A_calc: AnswerProps = { name: 'A' };
    let B_calc: AnswerProps = { name: 'B' };
    let a_calc: AnswerProps = { name: 'a' };
    let b_calc: AnswerProps = { name: 'b' };
    let c_calc: AnswerProps = { name: 'c' };

    if (A !== '') {
      answer['A'] = ParseAnswer(int_A);
      A_calc.calculation = `${A} blev indtastet`;
    }

    if (B !== '') {
      answer['B'] = ParseAnswer(int_B);
      B_calc.calculation = `${B} blev indtastet`;
    }

    if (a !== '') {
      answer['a'] = ParseAnswer(int_a);
      a_calc.calculation = `${a} blev indtastet`;
    }

    if (b !== '') {
      answer['b'] = ParseAnswer(int_b);
      b_calc.calculation = `${b} blev indtastet`;
    }

    if (c !== '') {
      answer['c'] = ParseAnswer(int_c);
      c_calc.calculation = `${c} blev indtastet`;
    }

    if (a !== '' && b !== '') {
      answer['A'] = ParseAnswer(atan(int_a / int_b));
      answer['B'] = ParseAnswer(atan(int_b / int_a));
      answer['c'] = ParseAnswer(
        Math.sqrt(Math.pow(int_a, 2) + Math.pow(int_b, 2))
      );

      A_calc.calculation = <InverseCalc f="tan" t={a} n={b} />;
      B_calc.calculation = <InverseCalc f="tan" t={b} n={a} />;
      c_calc.calculation = <SqrtCalc first={a} sign="+" second={b} />;
    } else if (a !== '' && c !== '') {
      answer['A'] = ParseAnswer(asin(int_a / int_c));
      answer['B'] = ParseAnswer(acos(int_a / int_c));
      answer['b'] = ParseAnswer(
        Math.sqrt(Math.pow(int_c, 2) - Math.pow(int_a, 2))
      );

      A_calc.calculation = <InverseCalc f="sin" t={a} n={c} />;
      B_calc.calculation = <InverseCalc f="cos" t={a} n={c} />;
      b_calc.calculation = <SqrtCalc first={c} sign="-" second={a} />;
    } else if (a !== '' && A !== '') {
      answer['B'] = ParseAnswer(180 - int_C - int_A);
      answer['b'] = ParseAnswer(int_a / tan(int_A));
      answer['c'] = ParseAnswer(int_a / sin(int_A));

      B_calc.calculation = <AngleCalc value={A} />;
      b_calc.calculation = <FracCalc f="tan" t={a} n={A} />;
      c_calc.calculation = <FracCalc f="sin" t={a} n={A} />;
    } else if (a !== '' && B !== '') {
      answer['A'] = ParseAnswer(180 - int_C - int_B);
      answer['b'] = ParseAnswer(int_a * tan(int_B));
      answer['c'] = ParseAnswer(int_a / cos(int_B));

      A_calc.calculation = <AngleCalc value={B} />;
      b_calc.calculation = <MultiplyCalc first={a} f="tan" second={B} />;
      c_calc.calculation = <FracCalc t={a} n={B} f="cos" />;
    } else if (b !== '' && c !== '') {
      answer['A'] = ParseAnswer(acos(int_b / int_c));
      answer['B'] = ParseAnswer(asin(int_b / int_c));
      answer['a'] = ParseAnswer(
        Math.sqrt(Math.pow(int_c, 2) - Math.pow(int_b, 2))
      );

      A_calc.calculation = <InverseCalc f="cos" t={b} n={c} />;
      B_calc.calculation = <InverseCalc f="sin" t={b} n={c} />;
      a_calc.calculation = <SqrtCalc first={c} sign="-" second={b} />;
    } else if (b !== '' && A !== '') {
      answer['B'] = ParseAnswer(180 - int_C - int_A);
      answer['a'] = ParseAnswer(int_b * tan(int_A));
      answer['c'] = ParseAnswer(int_b / cos(int_A));

      B_calc.calculation = <AngleCalc value={A} />;
      a_calc.calculation = <MultiplyCalc first={b} f="tan" second={A} />;
      c_calc.calculation = <FracCalc t={b} n={A} f="cos" />;
    } else if (b !== '' && B !== '') {
      answer['A'] = ParseAnswer(180 - int_C - int_B);
      answer['a'] = ParseAnswer(int_b / tan(int_B));
      answer['c'] = ParseAnswer(int_b / sin(int_B));

      A_calc.calculation = <AngleCalc value={B} />;
      a_calc.calculation = <FracCalc t={b} n={B} f="tan" />;
      c_calc.calculation = <FracCalc t={b} n={B} f="sin" />;
    } else if (c !== '' && A !== '') {
      answer['B'] = ParseAnswer(180 - int_C - int_A);
      answer['a'] = ParseAnswer(int_c * sin(int_A));
      answer['b'] = ParseAnswer(int_c * cos(int_A));

      B_calc.calculation = <AngleCalc value={A} />;
      a_calc.calculation = <MultiplyCalc first={c} f="sin" second={A} />;
      b_calc.calculation = <MultiplyCalc first={c} f="cos" second={A} />;
    } else if (c !== '' && B !== '') {
      answer['A'] = ParseAnswer(180 - int_C - int_B);
      answer['a'] = ParseAnswer(int_c * cos(int_B));
      answer['b'] = ParseAnswer(int_c * sin(int_B));

      A_calc.calculation = <AngleCalc value={B} />;
      a_calc.calculation = <MultiplyCalc first={c} f="cos" second={B} />;
      b_calc.calculation = <MultiplyCalc first={c} f="sin" second={B} />;
    } else {
      alert('Du har ikke indtastet nok tal til at trekanten kan beregnes');
      return;
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
    let readonlyTmp = {
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

      if (e.target.name === 'A') readonlyTmp[`B`] = tmp;
      else readonlyTmp[`A`] = tmp;

      if (a !== '') {
        readonlyTmp[`b`] = tmp;
        readonlyTmp[`c`] = tmp;
      } else if (b !== '') {
        readonlyTmp[`a`] = tmp;
        readonlyTmp[`c`] = tmp;
      } else if (c !== '') {
        readonlyTmp[`b`] = tmp;
        readonlyTmp[`a`] = tmp;
      }
    } else {
      let tmp = false;
      if (e.target.value !== '') tmp = true;

      if (A !== '' && e.target.name !== 'A') {
        readonlyTmp[`a`] = tmp;
        readonlyTmp[`b`] = tmp;
        readonlyTmp[`c`] = tmp;
      } else if (B !== '' && e.target.name !== 'B') {
        readonlyTmp[`a`] = tmp;
        readonlyTmp[`b`] = tmp;
        readonlyTmp[`c`] = tmp;
      } else if (a !== '' && e.target.name !== 'a') {
        readonlyTmp[`A`] = tmp;
        readonlyTmp[`B`] = tmp;
        readonlyTmp[`b`] = tmp;
        readonlyTmp[`c`] = tmp;
      } else if (b !== '' && e.target.name !== 'b') {
        readonlyTmp[`A`] = tmp;
        readonlyTmp[`B`] = tmp;
        readonlyTmp[`a`] = tmp;
        readonlyTmp[`c`] = tmp;
      } else if (c !== '' && e.target.name !== 'c') {
        readonlyTmp[`A`] = tmp;
        readonlyTmp[`B`] = tmp;
        readonlyTmp[`a`] = tmp;
        readonlyTmp[`b`] = tmp;
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
        description="Beregn alle sider og vinkler i en retvinklet trekant ved hjælp af trigonometri og pythagoras"
      />
      <Calculator calculate={calc} answers={calculations}>
        <div className="text-center w-[500px] m-auto h-[440px] ml-40 md:ml-auto">
          <Input
            name="A"
            value={A}
            readOnly={readonly['A']}
            placeholder="Vinkel A"
            className="float-left -ml-20 border-nord12 focus:ring-nord12 focus:border-nord12"
            onChange={handleChange}
          />
          <Input
            name="b"
            value={b}
            readOnly={readonly['b']}
            placeholder="Katete b"
            className="absolute ml-[-430px] mt-44 border-nord9 focus:ring-nord9 focus:border-nord9"
            onChange={handleChange}
          />
          <Input
            name="c"
            value={c}
            readOnly={readonly['c']}
            placeholder="Hypotenuse c"
            className="mt-40 absolute border-nord14 focus:ring-nord14 focus:border-nord14"
            onChange={handleChange}
            min={Math.max(+a || 0, +b || 0)}
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
            className="border-nord12 focus:ring-nord12 focus:border-nord12"
            onChange={handleChange}
          />
          <Input
            name="B"
            value={B}
            readOnly={readonly['B']}
            placeholder="Vinkel B"
            className="float-right -mr-20 border-nord9 focus:ring-nord9 focus:border-nord9"
            onChange={handleChange}
          />
        </div>
      </Calculator>
    </>
  );
}

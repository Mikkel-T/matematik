import { ChangeEvent, useState } from 'react';

import { Calc, text } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';
import Svg, { Input, Path, Text } from '@components/Svg';

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

    const ans: Record<string, string | number> = {
      A: '',
      B: '',
      a: '',
      b: '',
      c: '',
    };
    let A_calc = '';
    let B_calc = '';
    let a_calc = '';
    let b_calc = '';
    let c_calc = '';

    if (A !== '') {
      if (+A >= 90)
        throw new Error('Vinklerne (A eller B) må ikke være større end eller lig med 90°');
      ({ answer: ans['A'], calculation: A_calc } = Calc('A', vars, true));
    }

    if (B !== '') {
      if (+B >= 90)
        throw new Error('Vinklerne (A eller B) må ikke være større end eller lig med 90°');
      ({ answer: ans['B'], calculation: B_calc } = Calc('B', vars, true));
    }

    if (a !== '') {
      ({ answer: ans['a'], calculation: a_calc } = Calc('a', vars, true));
    }

    if (b !== '') {
      ({ answer: ans['b'], calculation: b_calc } = Calc('b', vars, true));
    }

    if (c !== '') {
      if (+c <= Math.max(+a, +b))
        throw new Error(
          'Kateterne (a eller b) må ikke være større end eller lig med hypotenusen (c)'
        );
      ({ answer: ans['c'], calculation: c_calc } = Calc('c', vars, true));
    }

    if (a !== '' && b !== '') {
      ({ answer: ans['A'], calculation: A_calc } = Calc('atan(a / b)', vars));
      ({ answer: ans['B'], calculation: B_calc } = Calc('atan(b / a)', vars));
      ({ answer: ans['c'], calculation: c_calc } = Calc('sqrt(a^2 + b^2)', vars));
    } else if (a !== '' && c !== '') {
      ({ answer: ans['A'], calculation: A_calc } = Calc('asin(a / c)', vars));
      ({ answer: ans['B'], calculation: B_calc } = Calc('acos(a / c)', vars));
      ({ answer: ans['b'], calculation: b_calc } = Calc('sqrt(c^2 - a^2)', vars));
    } else if (a !== '' && A !== '') {
      ({ answer: ans['B'], calculation: B_calc } = Calc('180 - C - A', vars));
      ({ answer: ans['b'], calculation: b_calc } = Calc('a / tan(A)', vars));
      ({ answer: ans['c'], calculation: c_calc } = Calc('a / sin(A)', vars));
    } else if (a !== '' && B !== '') {
      ({ answer: ans['A'], calculation: A_calc } = Calc('180 - C - B', vars));
      ({ answer: ans['b'], calculation: b_calc } = Calc('a * tan(B)', vars));
      ({ answer: ans['c'], calculation: c_calc } = Calc('a / cos(B)', vars));
    } else if (b !== '' && c !== '') {
      ({ answer: ans['A'], calculation: A_calc } = Calc('acos(b / c)', vars));
      ({ answer: ans['B'], calculation: B_calc } = Calc('asin(b / c)', vars));
      ({ answer: ans['a'], calculation: a_calc } = Calc('sqrt(c^2 - b^2)', vars));
    } else if (b !== '' && A !== '') {
      ({ answer: ans['B'], calculation: B_calc } = Calc('180 - C - A', vars));
      ({ answer: ans['a'], calculation: a_calc } = Calc('b * tan(A)', vars));
      ({ answer: ans['c'], calculation: c_calc } = Calc('b / cos(A)', vars));
    } else if (b !== '' && B !== '') {
      ({ answer: ans['A'], calculation: A_calc } = Calc('180 - C - B', vars));
      ({ answer: ans['a'], calculation: a_calc } = Calc('b / tan(B)', vars));
      ({ answer: ans['c'], calculation: c_calc } = Calc('b / sin(B)', vars));
    } else if (c !== '' && A !== '') {
      ({ answer: ans['B'], calculation: B_calc } = Calc('180 - C - A', vars));
      ({ answer: ans['a'], calculation: a_calc } = Calc('c * sin(A)', vars));
      ({ answer: ans['b'], calculation: b_calc } = Calc('c * cos(A)', vars));
    } else if (c !== '' && B !== '') {
      ({ answer: ans['A'], calculation: A_calc } = Calc('180 - C - B', vars));
      ({ answer: ans['a'], calculation: a_calc } = Calc('c * cos(B)', vars));
      ({ answer: ans['b'], calculation: b_calc } = Calc('c * sin(B)', vars));
    } else {
      throw new Error('Du har ikke indtastet nok tal til at trekanten kan beregnes');
    }
    setCalculations([
      { name: 'A', calculation: A_calc },
      { name: 'B', calculation: B_calc },
      { name: 'C', calculation: text('C er altid 90^{\\circ}') },
      { name: 'a', calculation: a_calc },
      { name: 'b', calculation: b_calc },
      { name: 'c', calculation: c_calc },
    ]);
    setAnswers(ans);
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
      <SEO
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
          />
          <Svg width="500" height="300">
            <Path d="M 3 257 h 40 v 40" className="text-nord14" />
            <Path d="M 420 297 A 80 80 180 0 1 433 260" className="text-nord9" />
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

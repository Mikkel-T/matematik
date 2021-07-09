import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import Svg, { Input, Path, Text } from '@components/Svg';
import { AnswerProps } from '@interfaces/index';
import { NextSeo } from 'next-seo';
import { ChangeEvent, useState } from 'react';

export default function Kvadrat() {
  const [Side, setSide] = useState('');
  const [Diagonal, setDiagonal] = useState('');
  const [Omkreds, setOmkreds] = useState('');
  const [Areal, setAreal] = useState('');
  const [calculations, setCalculations] = useState<AnswerProps[]>([]);
  const [answers, setAnswers] = useState<Record<string, string | number>>({
    Side: '',
    Diagonal: '',
    Omkreds: '',
    Areal: '',
  });
  const [readonly, setReadonly] = useState({
    Side: false,
    Diagonal: false,
    Omkreds: false,
    Areal: false,
  });

  function calc() {
    const vars = { Side, Diagonal, Omkreds, Areal };

    let answer: Record<string, string | number> = {
      Side: '',
      Diagonal: '',
      Omkreds: '',
      Areal: '',
    };
    let Side_calc: AnswerProps = { name: 'Side' };
    let Diagonal_calc: AnswerProps = { name: 'Diagonal' };
    let Omkreds_calc: AnswerProps = { name: 'Omkreds' };
    let Areal_calc: AnswerProps = { name: 'Areal' };

    if (Side !== '') {
      answer['Side'] = Calculate('Side', vars);
      answer['Diagonal'] = Calculate('Side * sqrt(2)', vars);
      answer['Omkreds'] = Calculate('Side * 4', vars);
      answer['Areal'] = Calculate('Side^2', vars);

      Side_calc.calculation = `${Side} blev indtastet`;
      Diagonal_calc.calculation = `${Side} * √2`;
      Omkreds_calc.calculation = `${Side} * 4`;
      Areal_calc.calculation = (
        <>
          {Side}
          <sup>2</sup>
        </>
      );
    }

    if (Diagonal !== '') {
      answer['Side'] = Calculate('Diagonal / sqrt(2)', vars);
      answer['Diagonal'] = Calculate('Diagonal', vars);
      answer['Omkreds'] = Calculate('(Diagonal / sqrt(2)) * 4', vars);
      answer['Areal'] = Calculate('(Diagonal / sqrt(2))^2', vars);

      Side_calc.calculation = <Fraction t={Diagonal} n={'√2'} />;
      Diagonal_calc.calculation = `${Diagonal} blev indtastet`;
      Omkreds_calc.calculation = (
        <>
          <Fraction t={Diagonal} n={'√2'} /> * 4
        </>
      );
      Areal_calc.calculation = (
        <>
          ({Diagonal} / √2)<sup>2</sup>
        </>
      );
    }

    if (Omkreds !== '') {
      answer['Side'] = Calculate('Omkreds / 4', vars);
      answer['Diagonal'] = Calculate('(Omkreds / 4) * sqrt(2)', vars);
      answer['Omkreds'] = Calculate('Omkreds', vars);
      answer['Areal'] = Calculate('(Omkreds / 4)^2', vars);

      Side_calc.calculation = <Fraction t={Omkreds} n={'4'} />;
      Diagonal_calc.calculation = (
        <>
          <Fraction t={Omkreds} n="4" /> * √2
        </>
      );
      Omkreds_calc.calculation = `${Omkreds} blev indtastet`;
      Areal_calc.calculation = (
        <>
          ({Omkreds} / 4)<sup>2</sup>
        </>
      );
    }

    if (Areal !== '') {
      answer['Side'] = Calculate('sqrt(Areal)', vars);
      answer['Diagonal'] = Calculate('sqrt(Areal) * sqrt(2)', vars);
      answer['Omkreds'] = Calculate('sqrt(Areal) * 4', vars);
      answer['Areal'] = Calculate('Areal', vars);

      Side_calc.calculation = `√${Areal}`;
      Diagonal_calc.calculation = `√${Areal} * √2`;
      Omkreds_calc.calculation = `√${Areal} * 4`;
      Areal_calc.calculation = `${Areal} blev indtastet`;
    }

    setCalculations([Side_calc, Diagonal_calc, Omkreds_calc, Areal_calc]);
    setAnswers(answer);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let tmp = false;
    if (e.target.value !== '') tmp = true;
    let readonlyTmp = {
      Side: tmp,
      Diagonal: tmp,
      Omkreds: tmp,
      Areal: tmp,
      [e.target.name]: false,
    };

    switch (e.target.name) {
      case 'Side':
        setSide(e.target.value);
        break;
      case 'Diagonal':
        setDiagonal(e.target.value);
        break;
      case 'Omkreds':
        setOmkreds(e.target.value);
        break;
      case 'Areal':
        setAreal(e.target.value);
        break;
    }
    setReadonly(readonlyTmp);
  }
  return (
    <>
      <NextSeo
        title="Kvadrat beregner"
        description="Beregn sidelængde, diagonallængde, areal og omkreds af et kvadrat"
      />
      <Calculator calculate={calc} answers={calculations}>
        <div className="text-center w-[600px] m-auto h-[500px]">
          <Input
            name="Omkreds"
            value={Omkreds}
            readOnly={readonly['Omkreds']}
            className="border-nord9 focus:ring-nord9 focus:border-nord9 absolute mt-3 ml-20"
            onChange={handleChange}
          />
          <Input
            name="Diagonal"
            value={Diagonal}
            readOnly={readonly['Diagonal']}
            className="border-nord14 focus:ring-nord14 focus:border-nord14 absolute mt-24 -ml-24"
            onChange={handleChange}
          />
          <Input
            name="Areal"
            value={Areal}
            readOnly={readonly['Areal']}
            className="mt-72 border-nord3 focus:ring-nord10 focus:border-nord10 absolute -ml-48"
            onChange={handleChange}
          />
          <Input
            name="Side"
            value={Side}
            readOnly={readonly['Side']}
            className="mt-52 border-nord12 focus:ring-nord12 focus:border-nord12 absolute ml-24"
            onChange={handleChange}
          />
          <Svg width="600" height="500">
            <Path d="M 546 4 H 54 v 492 h 492 V 4" className="text-nord9" />
            <Path d="M 546 4 v 492" className="text-nord12" />
            <Path d="M 54 4 L 546 496" className="text-nord14" />

            <Text
              x="400"
              y="270"
              text={answers.Side && `Side: ${answers.Side}`}
            />
            <Text
              x="215"
              y="155"
              text={answers.Diagonal && `Diagonal: ${answers.Diagonal}`}
            />
            <Text
              x="385"
              y="70"
              text={answers.Omkreds && `Omkreds: ${answers.Omkreds}`}
            />
            <Text
              x="115"
              y="350"
              text={answers.Areal && `Areal: ${answers.Areal}`}
            />
          </Svg>
        </div>
      </Calculator>
    </>
  );
}

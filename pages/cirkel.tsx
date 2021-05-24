import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import Svg, { Circle, Input, Path, Text } from '@components/Svg';
import { AnswerProps } from '@interfaces/index';
import { ChangeEvent, useState } from 'react';

export default function Cirkel() {
  const [Radius, setRadius] = useState('');
  const [Diameter, setDiameter] = useState('');
  const [Omkreds, setOmkreds] = useState('');
  const [Areal, setAreal] = useState('');
  const [calculations, setCalculations] = useState<AnswerProps[]>([]);
  const [answers, setAnswers] = useState<Record<string, string | number>>({
    Radius: '',
    Diameter: '',
    Omkreds: '',
    Areal: '',
  });
  const [readonly, setReadonly] = useState({
    Radius: false,
    Diameter: false,
    Omkreds: false,
    Areal: false,
  });

  function calc() {
    let int_Radius = +Radius;
    let int_Diameter = +Diameter;
    let int_Omkreds = +Omkreds;
    let int_Areal = +Areal;

    let answer: Record<string, string | number> = {
      Radius: '',
      Diameter: '',
      Omkreds: '',
      Areal: '',
    };
    let Radius_calc: AnswerProps = { name: 'Radius' };
    let Diameter_calc: AnswerProps = { name: 'Diameter' };
    let Omkreds_calc: AnswerProps = { name: 'Omkreds' };
    let Areal_calc: AnswerProps = { name: 'Areal' };

    if (Radius !== '') {
      answer['Radius'] = ParseAnswer(int_Radius);
      answer['Diameter'] = ParseAnswer(int_Radius * 2);
      answer['Omkreds'] = ParseAnswer(int_Radius * 2 * Math.PI);
      answer['Areal'] = ParseAnswer(Math.pow(int_Radius, 2) * Math.PI);

      Radius_calc.calculation = `${Radius} blev indtastet`;
      Diameter_calc.calculation = `${Diameter} * 2`;
      Omkreds_calc.calculation = `${Radius} * 2 * π`;
      Areal_calc.calculation = (
        <>
          {Radius}
          <sup>2</sup> * π
        </>
      );
    }

    if (Diameter !== '') {
      answer['Radius'] = ParseAnswer(int_Diameter / 2);
      answer['Diameter'] = ParseAnswer(int_Diameter);
      answer['Omkreds'] = ParseAnswer(int_Diameter * Math.PI);
      answer['Areal'] = ParseAnswer(Math.pow(int_Diameter / 2, 2) * Math.PI);

      Radius_calc.calculation = <Fraction t={Diameter} n={2} />;
      Diameter_calc.calculation = `${Diameter} blev indtastet`;
      Omkreds_calc.calculation = `${Diameter} * π`;
      Areal_calc.calculation = (
        <>
          ({Diameter} / 2)<sup>2</sup> * π
        </>
      );
    }

    if (Omkreds !== '') {
      answer['Radius'] = ParseAnswer(int_Omkreds / (2 * Math.PI));
      answer['Diameter'] = ParseAnswer(int_Omkreds / Math.PI);
      answer['Omkreds'] = ParseAnswer(int_Omkreds);
      answer['Areal'] = ParseAnswer(Math.pow(int_Omkreds, 2) / (4 * Math.PI));

      Radius_calc.calculation = <Fraction t={Omkreds} n={`2 * π`} />;
      Diameter_calc.calculation = <Fraction t={Omkreds} n="π" />;
      Omkreds_calc.calculation = `${Omkreds} blev indtastet`;
      Areal_calc.calculation = (
        <Fraction
          t={
            <>
              {Omkreds}
              <sup>2</sup>
            </>
          }
          n={`4 * π`}
        />
      );
    }

    if (Areal !== '') {
      answer['Radius'] = ParseAnswer(Math.sqrt(int_Areal / Math.PI));
      answer['Diameter'] = ParseAnswer(Math.sqrt(int_Areal / Math.PI) * 2);
      answer['Omkreds'] = ParseAnswer(
        Math.sqrt(int_Areal / Math.PI) * 2 * Math.PI
      );
      answer['Areal'] = ParseAnswer(int_Areal);

      Radius_calc.calculation = (
        <>
          √<Fraction t={Areal} n="π" />
        </>
      );
      Diameter_calc.calculation = (
        <>
          (√
          <Fraction t={Areal} n="π" />) * 2
        </>
      );
      Omkreds_calc.calculation = (
        <>
          (√
          <Fraction t={Areal} n="π" />) * 2 * π
        </>
      );
      Areal_calc.calculation = `${Areal} blev indtastet`;
    }

    setCalculations([Radius_calc, Diameter_calc, Omkreds_calc, Areal_calc]);
    setAnswers(answer);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let tmp = false;
    if (e.target.value !== '') tmp = true;
    let readonlyTmp = {
      Radius: tmp,
      Diameter: tmp,
      Omkreds: tmp,
      Areal: tmp,
      [e.target.name]: false,
    };

    switch (e.target.name) {
      case 'Radius':
        setRadius(e.target.value);
        break;
      case 'Diameter':
        setDiameter(e.target.value);
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
    <Calculator calculate={calc} answers={calculations}>
      <div className="text-center w-[600px] m-auto h-[500px]">
        <Input
          name="Omkreds"
          value={Omkreds}
          readOnly={readonly['Omkreds']}
          className="float-left -mb-11 border-nord9 focus:ring-nord9 focus:border-nord9"
          onChange={handleChange}
        />
        <Input
          name="Diameter"
          value={Diameter}
          readOnly={readonly['Diameter']}
          className="mt-24 absolute  ml-2 border-nord14 focus:ring-nord14 focus:border-nord14"
          onChange={handleChange}
        />
        <Input
          name="Areal"
          value={Areal}
          readOnly={readonly['Areal']}
          className="absolute mt-[12.5rem] -ml-48 border-nord3 focus:ring-nord10 focus:border-nord10"
          onChange={handleChange}
        />
        <Input
          name="Radius"
          value={Radius}
          readOnly={readonly['Radius']}
          className="absolute mt-[12.5rem] ml-10 border-nord12 focus:ring-nord12 focus:border-nord12"
          onChange={handleChange}
        />
        <Svg width="600" height="500">
          <Circle x="300" y="250" r="247" className="text-nord9" />
          <Path d="M 300 3 V 496" className="text-nord14" />
          <Path d="m 300 250 H 546" className="text-nord12" />

          <Text
            x="340"
            y="270"
            text={answers.Radius && `Radius: ${answers.Radius}`}
          />
          <Text
            x="310"
            y="155"
            text={answers.Diameter && `Diameter: ${answers.Diameter}`}
          />
          <Text
            x="0"
            y="60"
            text={answers.Omkreds && `Omkreds: ${answers.Omkreds}`}
          />
          <Text
            x="110"
            y="260"
            text={answers.Areal && `Areal: ${answers.Areal}`}
          />
        </Svg>
      </div>
      <div>Pi (π) er sat til: {Math.PI}</div>
    </Calculator>
  );
}

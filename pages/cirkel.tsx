import { ParseAnswer } from '@components/Answer';
import Calculator from '@components/Calculator';
import Fraction from '@components/Fraction';
import { AnswerProps } from '@interfaces/index';
import { ChangeEvent, useState } from 'react';

export default function Moms() {
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
        <input
          type="number"
          step="any"
          name="Omkreds"
          id="Omkreds"
          value={Omkreds}
          readOnly={readonly['Omkreds']}
          placeholder="Omkreds"
          className={`${
            readonly['Omkreds'] && 'opacity-50'
          } transition-opacity duration-500 float-left -mb-11 w-36 p-2 rounded-md bg-nord1 border border-nord9 focus:ring-nord9 focus:border-nord9`}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          step="any"
          name="Diameter"
          id="Diameter"
          value={Diameter}
          readOnly={readonly['Diameter']}
          placeholder="Diameter"
          className={`${
            readonly['Diameter'] && 'opacity-50'
          } transition-opacity duration-500 mt-24 absolute w-36 ml-2 p-2 rounded-md bg-nord1 border border-nord14 focus:ring-nord14 focus:border-nord14`}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          step="any"
          name="Areal"
          id="Areal"
          value={Areal}
          readOnly={readonly['Areal']}
          placeholder="Areal"
          className={`${
            readonly['Areal'] && 'opacity-50'
          } transition-opacity duration-500 absolute mt-[12.5rem] -ml-48 w-36 p-2 rounded-md bg-nord1 border border-nord3 focus:ring-nord10 focus:border-nord10`}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          step="any"
          name="Radius"
          id="Radius"
          value={Radius}
          readOnly={readonly['Radius']}
          placeholder="Radius"
          className={`${
            readonly['Radius'] && 'opacity-50'
          } transition-opacity duration-500 absolute mt-[12.5rem] ml-10 w-36 p-2 rounded-md bg-nord1 border border-nord12 focus:ring-nord12 focus:border-nord12`}
          onChange={(e) => handleChange(e)}
        />
        <svg
          width="600"
          height="500"
          className="stroke-2 fill-transparent m-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="300"
            cy="250"
            r="247"
            className="stroke-current text-nord9"
          />
          <line
            x1="300"
            y1="3"
            x2="300"
            y2="496"
            className="stroke-current text-nord14"
          />
          <line
            x1="300"
            y1="250"
            x2="546"
            y2="250"
            className="stroke-current text-nord12"
          />

          <text x="340" y="270" className="fill-current stroke-0">
            {answers.Radius && `Radius: ${answers.Radius}`}
          </text>
          <text x="310" y="155" className="fill-current stroke-0">
            {answers.Diameter && `Diameter: ${answers.Diameter}`}
          </text>
          <text x="0" y="60" className="fill-current stroke-0">
            {answers.Omkreds && `Omkreds: ${answers.Omkreds}`}
          </text>
          <text x="110" y="260" className="fill-current stroke-0">
            {answers.Areal && `Areal: ${answers.Areal}`}
          </text>
        </svg>
      </div>
      <div>Pi (π) er sat til: {Math.PI}</div>
    </Calculator>
  );
}

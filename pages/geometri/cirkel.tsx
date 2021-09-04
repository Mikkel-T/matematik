import { ChangeEvent, useState } from 'react';

import { Calculate } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';
import Svg, { Circle, Input, Path, Text } from '@components/Svg';

import p from '@utils/Parser';
import { frac, sqrt, text } from '@utils/Tex';

import { AnswerProps } from '@interfaces/index';

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
    const vars = { Radius, Diameter, Areal, Omkreds };

    const answer: Record<string, string | number> = {
      Radius: '',
      Diameter: '',
      Omkreds: '',
      Areal: '',
    };
    const Radius_calc: AnswerProps = { name: 'Radius' };
    const Diameter_calc: AnswerProps = { name: 'Diameter' };
    const Omkreds_calc: AnswerProps = { name: 'Omkreds' };
    const Areal_calc: AnswerProps = { name: 'Areal' };

    if (Radius !== '') {
      answer['Radius'] = Calculate('Radius', vars);
      answer['Diameter'] = Calculate('Radius * 2', vars);
      answer['Omkreds'] = Calculate('Radius * 2 * pi', vars);
      answer['Areal'] = Calculate('Radius^2 * pi', vars);

      Radius_calc.calculation = text(`${p(Radius)} blev indtastet`);
      Diameter_calc.calculation = `${p(Radius)} * 2`;
      Omkreds_calc.calculation = `${p(Radius)} * 2 * \\pi`;
      Areal_calc.calculation = `${p(Radius)}^2 * \\pi`;
    }

    if (Diameter !== '') {
      answer['Radius'] = Calculate('Diameter / 2', vars);
      answer['Diameter'] = Calculate('Diameter', vars);
      answer['Omkreds'] = Calculate('Diameter * pi', vars);
      answer['Areal'] = Calculate('(Diameter / 2)^2 * pi', vars);

      Radius_calc.calculation = frac({ t: p(Diameter), n: 2 });
      Diameter_calc.calculation = text(`${p(Diameter)} blev indtastet`);
      Omkreds_calc.calculation = `${p(Diameter)} * π`;
      Areal_calc.calculation = `(${p(Diameter)} / 2)^2 * \\pi`;
    }

    if (Omkreds !== '') {
      answer['Radius'] = Calculate('Omkreds / (2 * pi)', vars);
      answer['Diameter'] = Calculate('Omkreds / pi', vars);
      answer['Omkreds'] = Calculate('Omkreds', vars);
      answer['Areal'] = Calculate('Omkreds^2 / (4 * pi)', vars);

      Radius_calc.calculation = frac({ t: p(Omkreds), n: '2 * \\pi' });
      Diameter_calc.calculation = frac({ t: p(Omkreds), n: '\\pi' });
      Omkreds_calc.calculation = text(`${p(Omkreds)} blev indtastet`);
      Areal_calc.calculation = frac({ t: `${p(Omkreds)}^2`, n: '4 * \\pi' });
    }

    if (Areal !== '') {
      answer['Radius'] = Calculate('sqrt(Areal / pi)', vars);
      answer['Diameter'] = Calculate('sqrt(Areal / pi) * 2', vars);
      answer['Omkreds'] = Calculate('sqrt(Areal / pi) * 2 * pi', vars);
      answer['Areal'] = Calculate('Areal', vars);

      Radius_calc.calculation = sqrt(frac({ t: p(Areal), n: '\\pi' }));
      Diameter_calc.calculation = `${sqrt(
        frac({ t: p(Areal), n: '\\pi' })
      )} * 2`;
      Omkreds_calc.calculation = `${sqrt(
        frac({ t: p(Areal), n: '\\pi' })
      )} * 2 * \\pi`;
      Areal_calc.calculation = text(`${p(Areal)} blev indtastet`);
    }

    setCalculations([Radius_calc, Diameter_calc, Omkreds_calc, Areal_calc]);
    setAnswers(answer);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let tmp = false;
    if (e.target.value !== '') tmp = true;
    const readonlyTmp = {
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
    <>
      <SEO
        title="Cirkel beregner"
        description="En cirkelberegner der udregner radius, diameter, areal og omkreds af en cirkel"
      />
      <Calculator calculate={calc} answers={calculations}>
        <div className="text-center w-[600px] m-auto h-[500px]">
          <Input
            name="Omkreds"
            value={Omkreds}
            readOnly={readonly['Omkreds']}
            className="-mb-11 border-nord9 focus:ring-nord9 focus:border-nord9 float-left"
            onChange={handleChange}
          />
          <Input
            name="Diameter"
            value={Diameter}
            readOnly={readonly['Diameter']}
            className="border-nord14 focus:ring-nord14 focus:border-nord14 absolute mt-24 ml-2"
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
    </>
  );
}

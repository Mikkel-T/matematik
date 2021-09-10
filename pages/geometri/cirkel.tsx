import { ChangeEvent, useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';
import Svg, { Circle, Input, Path, Text } from '@components/Svg';

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

    const ans: Record<string, string | number> = {
      Radius: '',
      Diameter: '',
      Omkreds: '',
      Areal: '',
    };
    let Radius_calc = '';
    let Diameter_calc = '';
    let Omkreds_calc = '';
    let Areal_calc = '';

    if (Radius !== '') {
      ({ answer: ans['Radius'], calculation: Radius_calc } = Calc(
        'Radius',
        vars,
        true
      ));
      ({ answer: ans['Diameter'], calculation: Diameter_calc } = Calc(
        'Radius * 2',
        vars
      ));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc(
        'Radius * 2 * pi',
        vars
      ));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc(
        'Radius^2 * pi',
        vars
      ));
    }

    if (Diameter !== '') {
      ({ answer: ans['Radius'], calculation: Radius_calc } = Calc(
        'Diameter / 2',
        vars
      ));
      ({ answer: ans['Diameter'], calculation: Diameter_calc } = Calc(
        'Diameter',
        vars,
        true
      ));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc(
        'Diameter * pi',
        vars
      ));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc(
        '(Diameter / 2)^2 * pi',
        vars
      ));
    }

    if (Omkreds !== '') {
      ({ answer: ans['Radius'], calculation: Radius_calc } = Calc(
        'Omkreds / (2 * pi)',
        vars
      ));
      ({ answer: ans['Diameter'], calculation: Diameter_calc } = Calc(
        'Omkreds / pi',
        vars
      ));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc(
        'Omkreds',
        vars,
        true
      ));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc(
        'Omkreds^2 / (4 * pi)',
        vars
      ));
    }

    if (Areal !== '') {
      ({ answer: ans['Radius'], calculation: Radius_calc } = Calc(
        'sqrt(Areal / pi)',
        vars
      ));
      ({ answer: ans['Diameter'], calculation: Diameter_calc } = Calc(
        'sqrt(Areal / pi) * 2',
        vars
      ));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc(
        'sqrt(Areal / pi) * 2 * pi',
        vars
      ));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc(
        'Areal',
        vars,
        true
      ));
    }

    setCalculations([
      { name: 'Radius', calculation: Radius_calc },
      { name: 'Diameter', calculation: Diameter_calc },
      { name: 'Omkreds', calculation: Omkreds_calc },
      { name: 'Areal', calculation: Areal_calc },
    ]);
    setAnswers(ans);
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

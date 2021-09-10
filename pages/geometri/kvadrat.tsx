import { ChangeEvent, useState } from 'react';

import { Calc } from '@components/Answer';
import Calculator from '@components/Calculator';
import SEO from '@components/SEO';
import Svg, { Input, Path, Text } from '@components/Svg';

import { AnswerProps } from '@interfaces/index';

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

    const ans: Record<string, string | number> = {
      Side: '',
      Diagonal: '',
      Omkreds: '',
      Areal: '',
    };
    let Side_calc = '';
    let Diagonal_calc = '';
    let Omkreds_calc = '';
    let Areal_calc = '';

    if (Side !== '') {
      ({ answer: ans['Side'], calculation: Side_calc } = Calc('Side', vars, true));
      ({ answer: ans['Diagonal'], calculation: Diagonal_calc } = Calc('Side * sqrt(2)', vars));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc('Side * 4', vars));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc('Side^2', vars));
    }

    if (Diagonal !== '') {
      ({ answer: ans['Side'], calculation: Side_calc } = Calc('Diagonal / sqrt(2)', vars));
      ({ answer: ans['Diagonal'], calculation: Diagonal_calc } = Calc('Diagonal', vars, true));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc(
        '(Diagonal / sqrt(2)) * 4',
        vars
      ));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc('(Diagonal / sqrt(2))^2', vars));
    }

    if (Omkreds !== '') {
      ({ answer: ans['Side'], calculation: Side_calc } = Calc('Omkreds / 4', vars));
      ({ answer: ans['Diagonal'], calculation: Diagonal_calc } = Calc(
        '(Omkreds / 4) * sqrt(2)',
        vars
      ));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc('Omkreds', vars, true));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc('(Omkreds / 4)^2', vars));
    }

    if (Areal !== '') {
      ({ answer: ans['Side'], calculation: Side_calc } = Calc('sqrt(Areal)', vars));
      ({ answer: ans['Diagonal'], calculation: Diagonal_calc } = Calc(
        'sqrt(Areal) * sqrt(2)',
        vars
      ));
      ({ answer: ans['Omkreds'], calculation: Omkreds_calc } = Calc('sqrt(Areal) * 4', vars));
      ({ answer: ans['Areal'], calculation: Areal_calc } = Calc('Areal', vars, true));
    }

    setCalculations([
      { name: 'Side', calculation: Side_calc },
      { name: 'Diagonal', calculation: Diagonal_calc },
      { name: 'Omkreds', calculation: Omkreds_calc },
      { name: 'Areal', calculation: Areal_calc },
    ]);
    setAnswers(ans);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let tmp = false;
    if (e.target.value !== '') tmp = true;
    const readonlyTmp = {
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
      <SEO
        title="Kvadrat beregner"
        description="En kvadratberegner der udregner sidelængde, diagonallængde, areal og omkreds af et kvadrat"
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

            <Text x="400" y="270" text={answers.Side && `Side: ${answers.Side}`} />
            <Text x="215" y="155" text={answers.Diagonal && `Diagonal: ${answers.Diagonal}`} />
            <Text x="385" y="70" text={answers.Omkreds && `Omkreds: ${answers.Omkreds}`} />
            <Text x="115" y="350" text={answers.Areal && `Areal: ${answers.Areal}`} />
          </Svg>
        </div>
      </Calculator>
    </>
  );
}

import MJ from 'react-mathjax';

import { parse0 } from '@utils/Parser';
import { evaluate } from '@utils/math';

import { AnswerProps } from '@interfaces/index';

export default function Answer({ name, answer }: AnswerProps) {
  return (
    <MJ.Provider>
      <div>
        <b>{name}:</b>{' '}
        {answer && <MJ.Node inline formula={answer.toString()} />}
      </div>
    </MJ.Provider>
  );
}

export function Calculate(expr: string, scope: object) {
  return parse0(+evaluate(expr, scope));
}

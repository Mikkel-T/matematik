import MJ from 'react-mathjax';

import { GetAnswer } from '@utils/math';

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

export function Calc(
  expr: string,
  scope: Record<string, number | string>,
  entered?: boolean
): { answer: string; calculation: string } {
  return GetAnswer(expr, scope, entered);
}

export function text(str: string) {
  return str.replaceAll(' ', '~ ');
}

import TeX from '@matejmazur/react-katex';

import { GetAnswer } from '@utils/math';

import { AnswerProps } from '@interfaces/index';

export default function Answer({ name, answer }: AnswerProps) {
  return (
    <div>
      <b>{name}:</b> {answer && <TeX math={answer.toString()} />}
    </div>
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

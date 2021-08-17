import { evaluate } from '@utils/math';

import { AnswerProps } from '@interfaces/index';

export default function Answer({ name, answer }: AnswerProps) {
  return (
    <div>
      <b>{name}:</b> {answer}
    </div>
  );
}

export function ParseAnswer(answer: number) {
  return answer ? parseFloat(answer.toFixed(3)) : 0;
}

export function Calculate(expr: string, scope: object) {
  return ParseAnswer(+evaluate(expr, scope));
}

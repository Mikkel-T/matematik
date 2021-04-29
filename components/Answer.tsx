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

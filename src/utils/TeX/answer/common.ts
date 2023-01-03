import { factorial } from "@math/factorial";

import { Ans } from ".";

export const add = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer + rhs.answer,
  calculation: `${lhs.calculation} + ${rhs.calculation}`,
  equation: `${lhs.equation} + ${rhs.equation}`,
});

export const sub = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer - rhs.answer,
  calculation: `${lhs.calculation} - ${rhs.calculation}`,
  equation: `${lhs.equation} - ${rhs.equation}`,
});

export const mul = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer * rhs.answer,
  calculation: `${lhs.calculation} \\cdot ${rhs.calculation}`,
  equation: `${lhs.equation} \\cdot ${rhs.equation}`,
});

export const frac = (t: Ans, b: Ans): Ans => ({
  answer: t.answer / b.answer,
  calculation: `\\frac{${t.calculation}}{${b.calculation}}`,
  equation: `\\frac{${t.equation}}{${b.equation}}`,
});

export const fac = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: factorial(answer),
  calculation: `${calculation}!`,
  equation: `${equation}!`,
});

export const pow = (x: Ans, pow: Ans): Ans => ({
  answer: x.answer ** pow.answer,
  calculation: `${x.calculation}^{${pow.calculation}}`,
  equation: `${x.equation}^{${pow.equation}}`,
});

export const neg = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: -answer,
  calculation: `-${calculation}`,
  equation: `-${equation}`,
});

export const sqrt = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: Math.sqrt(answer),
  calculation: `\\sqrt{${calculation}}`,
  equation: `\\sqrt{${equation}}`,
});

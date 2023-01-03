import { factorial } from "@math/factorial";

interface Ans {
  answer: number;
  calculation: string;
  equation: string;
}

interface FinalAns {
  answer: string | number;
  calculation: string;
  equation: string;
}

export const n = (num: number, name: string): Ans => ({
  answer: num,
  calculation: num.toString(),
  equation: name,
});

export const coord = (x: Ans, y: Ans): FinalAns => ({
  answer: `\\left( ${x.answer} , ${y.answer} \\right)`,
  calculation: `\\left( ${x.calculation} , ${y.calculation} \\right)`,
  equation: `\\left( ${x.equation} , ${y.equation} \\right)`,
});

export const frac = (t: Ans, b: Ans): Ans => ({
  answer: t.answer / b.answer,
  calculation: `\\frac{${t.calculation}}{${b.calculation}}`,
  equation: `\\frac{${t.equation}}{${b.equation}}`,
});

export const mul = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer * rhs.answer,
  calculation: `${lhs.calculation} \\cdot ${rhs.calculation}`,
  equation: `${lhs.equation} \\cdot ${rhs.equation}`,
});

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

export const neg = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: -answer,
  calculation: `-${calculation}`,
  equation: `-${equation}`,
});

export const par = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: answer,
  calculation: `(${calculation})`,
  equation: `(${equation})`,
});

export const pow = (x: Ans, pow: Ans): Ans => ({
  answer: x.answer ** pow.answer,
  calculation: `${x.calculation}^{${pow.calculation}}`,
  equation: `${x.equation}^{${pow.equation}}`,
});

export const pmat = (t: Ans, b: Ans): FinalAns => ({
  answer: `\\begin{pmatrix}${t.answer}\\\\${b.answer}\\end{pmatrix}`,
  calculation: `\\begin{pmatrix}${t.calculation}\\\\${b.calculation}\\end{pmatrix}`,
  equation: `\\begin{pmatrix}${t.equation}\\\\${b.equation}\\end{pmatrix}`,
});

export const sqrt = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: Math.sqrt(answer),
  calculation: `\\sqrt{${calculation}}`,
  equation: `\\sqrt{${equation}}`,
});

export const fac = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: factorial(answer),
  calculation: `${calculation}!`,
  equation: `${equation}!`,
});

export const pct = ({ answer, calculation, equation }: Ans): Ans => ({
  answer,
  calculation: `${calculation}\\%`,
  equation: `${equation}\\%`,
});

export const ansPct = (val: Ans): FinalAns => ({
  ...val,
  answer: val.answer + "\\%",
});

export function text(str: string) {
  return `\\text{${str}}`;
}

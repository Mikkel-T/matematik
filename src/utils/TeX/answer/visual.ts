import { Ans, FinalAns } from ".";

export const coord = (x: Ans, y: Ans): FinalAns => ({
  answer: `\\left( ${x.answer} , ${y.answer} \\right)`,
  calculation: `\\left( ${x.calculation} , ${y.calculation} \\right)`,
  equation: `\\left( ${x.equation} , ${y.equation} \\right)`,
});

export const par = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: answer,
  calculation: `(${calculation})`,
  equation: `(${equation})`,
});

export const bpar = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: answer,
  calculation: `\\left(${calculation}\\right)`,
  equation: `\\left(${equation}\\right)`,
});

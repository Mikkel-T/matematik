import { Ans, FinalAns } from ".";

export const pct = ({ answer, calculation, equation }: Ans): Ans => ({
  answer,
  calculation: `${calculation}\\%`,
  equation: `${equation}\\%`,
});

export const ansPct = (val: Ans): FinalAns => ({
  ...val,
  answer: val.answer + "\\%",
});

import { Ans, FinalAns } from ".";

/**
 * Add a percent sign to the `calculation` and `equation` properties of an `Ans`.
 */
export const pct = ({ answer, calculation, equation }: Ans): Ans => ({
  answer,
  calculation: `${calculation}\\%`,
  equation: `${equation}\\%`,
});

/**
 * Add a percent sign to the `answer` property of an `Ans`.
 */
export const ansPct = (val: Ans): FinalAns => ({
  ...val,
  answer: val.answer + "\\%",
});

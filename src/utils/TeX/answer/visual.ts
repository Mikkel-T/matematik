import { Ans, FinalAns } from ".";

/**
 * Types two `Ans` objects out as x and y in a coordinate.
 */
export const coord = (x: Ans, y: Ans): FinalAns => ({
  answer: `\\left( ${x.answer} , ${y.answer} \\right)`,
  calculation: `\\left( ${x.calculation} , ${y.calculation} \\right)`,
  equation: `\\left( ${x.equation} , ${y.equation} \\right)`,
});

/**
 * Adds a normal pair of parentheses to the calculation and equation.
 */
export const par = ({ answer, calculation, equation }: Ans): Ans => ({
  answer,
  calculation: `(${calculation})`,
  equation: `(${equation})`,
});

/**
 * Adds a left and right parenthesis to the calculation and equation.
 */
export const bpar = ({ answer, calculation, equation }: Ans): Ans => ({
  answer,
  calculation: `\\left(${calculation}\\right)`,
  equation: `\\left(${equation}\\right)`,
});

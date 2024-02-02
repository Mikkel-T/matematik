import { round } from "@math/utils";
import type { Op, Ans } from ".";

/**
 * Types two `Op` objects out as x and y in a coordinate.
 */
export const coord = (x: Op, y: Op): Ans => ({
  answer: `\\left( ${round(x.answer)} , ${round(y.answer)} \\right)`,
  calculation: `\\left( ${x.calculation} , ${y.calculation} \\right)`,
  equation: `\\left( ${x.equation} , ${y.equation} \\right)`,
});

/**
 * Adds a normal pair of parentheses to the calculation and equation.
 */
export const par = ({ answer, calculation, equation }: Op): Op => ({
  answer,
  calculation: `(${calculation})`,
  equation: `(${equation})`,
});

/**
 * Adds a left and right parenthesis to the calculation and equation.
 */
export const bpar = ({ answer, calculation, equation }: Op): Op => ({
  answer,
  calculation: `\\left(${calculation}\\right)`,
  equation: `\\left(${equation}\\right)`,
});

import { factorial } from "@math/factorial";

import { Ans } from ".";

/**
 * Add to `Ans` objects together
 */
export const add = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer + rhs.answer,
  calculation: `${lhs.calculation} + ${rhs.calculation}`,
  equation: `${lhs.equation} + ${rhs.equation}`,
});

/**
 * Subtract an `Ans` objects from another `Ans` object
 */
export const sub = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer - rhs.answer,
  calculation: `${lhs.calculation} - ${rhs.calculation}`,
  equation: `${lhs.equation} - ${rhs.equation}`,
});

/**
 * Multiplicate an `Ans` object with another `Ans` object
 */
export const mul = (lhs: Ans, rhs: Ans): Ans => ({
  answer: lhs.answer * rhs.answer,
  calculation: `${lhs.calculation} \\cdot ${rhs.calculation}`,
  equation: `${lhs.equation} \\cdot ${rhs.equation}`,
});

/**
 * Divide an `Ans` object with another `Ans` object
 */
export const frac = (t: Ans, b: Ans): Ans => ({
  answer: t.answer / b.answer,
  calculation: `\\frac{${t.calculation}}{${b.calculation}}`,
  equation: `\\frac{${t.equation}}{${b.equation}}`,
});

/**
 * Take the factorial of an `Ans` object
 */
export const fac = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: factorial(answer),
  calculation: `${calculation}!`,
  equation: `${equation}!`,
});

/**
 * Put an `Ans` object to the power of another `Ans` object
 */
export const pow = (x: Ans, pow: Ans): Ans => ({
  answer: x.answer ** pow.answer,
  calculation: `${x.calculation}^{${pow.calculation}}`,
  equation: `${x.equation}^{${pow.equation}}`,
});

/**
 * Get the negative value of an `Ans` object
 */
export const neg = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: -answer,
  calculation: `-${calculation}`,
  equation: `-${equation}`,
});

/**
 * Take the square root of an `Ans` object
 */
export const sqrt = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: Math.sqrt(answer),
  calculation: `\\sqrt{${calculation}}`,
  equation: `\\sqrt{${equation}}`,
});

import { factorial } from "@math/utils";
import type { Op } from ".";

/**
 * Add to `Op` objects together
 */
export const add = (lhs: Op, rhs: Op): Op => ({
  answer: lhs.answer + rhs.answer,
  calculation: `${lhs.calculation} + ${rhs.calculation}`,
  equation: `${lhs.equation} + ${rhs.equation}`,
});

/**
 * Subtract an `Op` objects from another `Op` object
 */
export const sub = (lhs: Op, rhs: Op): Op => ({
  answer: lhs.answer - rhs.answer,
  calculation: `${lhs.calculation} - ${rhs.calculation}`,
  equation: `${lhs.equation} - ${rhs.equation}`,
});

/**
 * Multiplicate an `Op` object with another `Op` object
 */
export const mul = (lhs: Op, rhs: Op): Op => ({
  answer: lhs.answer * rhs.answer,
  calculation: `${lhs.calculation} \\cdot ${rhs.calculation}`,
  equation: `${lhs.equation} \\cdot ${rhs.equation}`,
});

/**
 * Divide an `Op` object with another `Op` object
 */
export const frac = (t: Op, b: Op): Op => ({
  answer: t.answer / b.answer,
  calculation: `\\frac{${t.calculation}}{${b.calculation}}`,
  equation: `\\frac{${t.equation}}{${b.equation}}`,
});

/**
 * Take the factorial of an `Op` object
 */
export const fac = ({ answer, calculation, equation }: Op): Op => ({
  answer: factorial(answer),
  calculation: `${calculation}!`,
  equation: `${equation}!`,
});

/**
 * Put an `Op` object to the power of another `Op` object
 */
export const pow = (x: Op, pow: Op): Op => ({
  answer: x.answer ** pow.answer,
  calculation: `${x.calculation}^{${pow.calculation}}`,
  equation: `${x.equation}^{${pow.equation}}`,
});

/**
 * Get the negative value of an `Op` object
 */
export const neg = ({ answer, calculation, equation }: Op): Op => ({
  answer: -answer,
  calculation: `-${calculation}`,
  equation: `-${equation}`,
});

/**
 * Take the square root of an `Op` object
 */
export const sqrt = ({ answer, calculation, equation }: Op): Op => ({
  answer: Math.sqrt(answer),
  calculation: `\\sqrt{${calculation}}`,
  equation: `\\sqrt{${equation}}`,
});

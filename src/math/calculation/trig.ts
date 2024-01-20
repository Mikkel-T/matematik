import { round } from "@math/utils";

import {
  acos as acos_c,
  asin as asin_c,
  atan as atan_c,
  cos as cos_c,
  sin as sin_c,
  tan as tan_c,
} from "@math/trig";

import type { Ans, Op } from ".";

export const tan = ({ answer, calculation, equation }: Op): Op => ({
  answer: tan_c(answer),
  calculation: `\\tan\\left(${calculation}\\right)`,
  equation: `\\tan\\left(${equation}\\right)`,
});

export const cos = ({ answer, calculation, equation }: Op): Op => ({
  answer: cos_c(answer),
  calculation: `\\cos\\left(${calculation}\\right)`,
  equation: `\\cos\\left(${equation}\\right)`,
});

export const sin = ({ answer, calculation, equation }: Op): Op => ({
  answer: sin_c(answer),
  calculation: `\\sin\\left(${calculation}\\right)`,
  equation: `\\sin\\left(${equation}\\right)`,
});

export const atan = ({ answer, calculation, equation }: Op): Op => ({
  answer: atan_c(answer),
  calculation: `\\tan^{-1}\\left(${calculation}\\right)`,
  equation: `\\tan^{-1}\\left(${equation}\\right)`,
});

export const acos = ({ answer, calculation, equation }: Op): Op => ({
  answer: acos_c(answer),
  calculation: `\\cos^{-1}\\left(${calculation}\\right)`,
  equation: `\\cos^{-1}\\left(${equation}\\right)`,
});

export const asin = ({ answer, calculation, equation }: Op): Op => ({
  answer: asin_c(answer),
  calculation: `\\sin^{-1}\\left(${calculation}\\right)`,
  equation: `\\sin^{-1}\\left(${equation}\\right)`,
});

/**
 * Add a degree sign to the `answer` property of an `Op`.
 */
export const ansDeg = (val: Op): Ans => ({
  ...val,
  answer: round(val.answer) + "^{\\circ}",
});

import {
  acos as acos_c,
  asin as asin_c,
  atan as atan_c,
  cos as cos_c,
  sin as sin_c,
  tan as tan_c,
} from "@math/trig";

import { Ans, FinalAns } from ".";

export const tan = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: tan_c(answer),
  calculation: `\\tan\\left(${calculation}\\right)`,
  equation: `\\tan\\left(${equation}\\right)`,
});

export const cos = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: cos_c(answer),
  calculation: `\\cos\\left(${calculation}\\right)`,
  equation: `\\cos\\left(${equation}\\right)`,
});

export const sin = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: sin_c(answer),
  calculation: `\\sin\\left(${calculation}\\right)`,
  equation: `\\sin\\left(${equation}\\right)`,
});

export const atan = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: atan_c(answer),
  calculation: `\\tan^{-1}\\left(${calculation}\\right)`,
  equation: `\\tan^{-1}\\left(${equation}\\right)`,
});

export const acos = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: acos_c(answer),
  calculation: `\\cos^{-1}\\left(${calculation}\\right)`,
  equation: `\\cos^{-1}\\left(${equation}\\right)`,
});

export const asin = ({ answer, calculation, equation }: Ans): Ans => ({
  answer: asin_c(answer),
  calculation: `\\sin^{-1}\\left(${calculation}\\right)`,
  equation: `\\sin^{-1}\\left(${equation}\\right)`,
});

/**
 * Add a degree sign to the `answer` property of an `Ans`.
 */
export const ansDeg = (val: Ans): FinalAns => ({
  ...val,
  answer: val.answer + "^{\\circ}",
});

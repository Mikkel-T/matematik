import { add, mul, pow, sqrt } from "@utils/TeX";

import { Ans, FinalAns, n } from ".";

const pmatrix = (t: number | string, b: number | string) =>
  `\\begin{pmatrix}${t}\\\\${b}\\end{pmatrix}`;

export const pmat = (t: Ans, b: Ans): FinalAns => ({
  answer: pmatrix(t.answer, b.answer),
  calculation: pmatrix(t.calculation, b.calculation),
  equation: pmatrix(t.equation, b.equation),
});

/**
 * Sets up the equations for calculating the length of a vector, the answer and calculation will both be the actual values while the equation will be the notation for the length of the vector. Used in /vektor-2d/vinkel
 */
export const vecLen = ({
  x,
  y,
  name,
}: {
  x: number;
  y: number;
  name: string;
}): Ans => ({
  ...sqrt(add(pow(n(x, ""), n(2, "2")), pow(n(y, ""), n(2, "2")))),
  equation: `|\\vec{${name}}|`,
});

/**
 * Sets up the equations for calculating the squared length of a vector, the answer and calculation will both be the actual values while the equation will be the notation for the squared length of the vector. Used in /vektor-2d/projektion
 */
export const vecLenSq = ({
  x,
  y,
  name,
}: {
  x: number;
  y: number;
  name: string;
}): Ans => ({
  ...add(pow(n(x, ""), n(2, "2")), pow(n(y, ""), n(2, "2"))),
  equation: `|\\vec{${name}}|^{2}`,
});

/**
 * Sets up the equations for calculating the scalar product of two vectors, the answer and calculation will both be the actual values while the equation will be the notation for the scalar product of the two vectors. Used in /vektor-2d/projektion and /vektor-2d/vinkel
 */
export const dotProd = (
  vec1: {
    x: number;
    y: number;
    name: string;
  },
  vec2: {
    x: number;
    y: number;
    name: string;
  }
): Ans => ({
  ...add(mul(n(vec1.x, ""), n(vec2.x, "")), mul(n(vec1.y, ""), n(vec2.y, ""))),
  equation: `\\vec{${vec1.name}} \\bullet \\vec{${vec2.name}}`,
});

/**
 * Sets up the equations for calculating a number multiplied by a vector, the answer will be a vector, the calculation will be the calculation for `num` multiplied by the vector and the equation will be the equation for `num` multiplied by notation for the vector. Used in /vektor-2d/projektion
 */
export const numMulVec = (
  num: Ans,
  vec: {
    x: number;
    y: number;
    name: string;
  }
): FinalAns => ({
  answer: pmatrix(num.answer * vec.x, num.answer * vec.y),
  calculation: `${num.calculation} \\cdot ${pmatrix(vec.x, vec.y)}`,
  equation: `${num.equation} \\cdot \\vec{${vec.name}}`,
});

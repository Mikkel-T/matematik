import { round } from "@math/utils";

import { pow, type Ans, type Op, na, add, sqrt, mul } from ".";

/**
 * Created a LaTeX vector
 */
export const pmatrix = (...coord: (string | number)[]) =>
  `\\begin{pmatrix}${coord
    .map((i) => (typeof i === "number" ? round(i) : i))
    .join("\\\\")}\\end{pmatrix}`;

/**
 * Types two `Op` objects out as x and y in a 2D vector.
 */
export const pmat = (...coord: Op[]): Ans => ({
  answer: pmatrix(...coord.map((i) => i.answer)),
  calculation: pmatrix(...coord.map((i) => i.calculation)),
  equation: pmatrix(...coord.map((i) => i.equation)),
});

/**
 * Sets up the equations for calculating the length of a vector, the answer and calculation will both be the actual values while the equation will be the notation for the length of the vector. Used in /vektor-2d/vinkel
 */
export const vecLen = ({
  x,
  y,
  z,
  name,
}: {
  x: Op;
  y: Op;
  z?: Op;
  name: string;
}): Op => ({
  ...sqrt(
    add(
      pow(x, na(2)),
      z !== undefined ? add(pow(y, na(2)), pow(z, na(2))) : pow(y, na(2)),
    ),
  ),
  equation: `|\\vec{${name}}|`,
});

/**
 * Sets up the equations for calculating the squared length of a vector, the answer and calculation will both be the actual values while the equation will be the notation for the squared length of the vector. Used in /vektor-2d/projektion
 */
export const vecLenSq = ({
  x,
  y,
  z,
  name,
}: {
  x: Op;
  y: Op;
  z?: Op;
  name: string;
}): Op => ({
  ...add(
    pow(x, na(2)),
    z !== undefined ? add(pow(y, na(2)), pow(z, na(2))) : pow(y, na(2)),
  ),
  equation: `|\\vec{${name}}|^{2}`,
});

/**
 * Sets up the equations for calculating the scalar product of two vectors, the answer and calculation will both be the actual values while the equation will be the notation for the scalar product of the two vectors. Used in /vektor-2d/projektion and /vektor-2d/vinkel
 */
export const dotProd = (
  vec1: {
    x: Op;
    y: Op;
    z?: Op;
    name: string;
  },
  vec2: {
    x: Op;
    y: Op;
    z?: Op;
    name: string;
  },
): Op => ({
  ...add(
    mul(vec1.x, vec2.x),
    vec1.z !== undefined && vec2.z !== undefined
      ? add(mul(vec1.y, vec2.y), mul(vec1.z, vec2.z))
      : mul(vec1.y, vec2.y),
  ),
  equation: `\\vec{${vec1.name}} \\bullet \\vec{${vec2.name}}`,
});

/**
 * Sets up the equations for calculating a number multiplied by a vector, the answer will be a vector, the calculation will be the calculation for `num` multiplied by the vector and the equation will be the equation for `num` multiplied by notation for the vector. Used in /vektor-2d/projektion
 */
export const numMulVec = (
  num: Op,
  vec: {
    x: Op;
    y: Op;
    z?: Op;
    name: string;
  },
): Ans => ({
  answer:
    vec.z !== undefined
      ? pmatrix(
          num.answer * vec.x.answer,
          num.answer * vec.y.answer,
          num.answer * vec.z.answer,
        )
      : pmatrix(num.answer * vec.x.answer, num.answer * vec.y.answer),
  calculation: `${num.calculation} \\cdot ${
    vec.z !== undefined
      ? pmatrix(vec.x.answer, vec.y.answer, vec.z.answer)
      : pmatrix(vec.x.answer, vec.y.answer)
  }`,
  equation: `${num.equation} \\cdot \\vec{${vec.name}}`,
});

export const crossProd = (
  vec1: {
    x: Op;
    y: Op;
    z: Op;
    name: string;
  },
  vec2: {
    x: Op;
    y: Op;
    z: Op;
    name: string;
  },
): Ans => ({
  answer: pmatrix(
    vec1.y.answer * vec2.z.answer - vec1.z.answer * vec2.y.answer,
    vec1.z.answer * vec2.x.answer - vec1.x.answer * vec2.z.answer,
    vec1.x.answer * vec2.y.answer - vec1.y.answer * vec2.x.answer,
  ),
  calculation: `${pmatrix(vec1.x.answer, vec1.y.answer, vec1.z.answer)} \\times ${pmatrix(vec2.x.answer, vec2.y.answer, vec2.z.answer)}`,
  equation: `\\vec{${vec1.name}} \\times \\vec{${vec2.name}}`,
});

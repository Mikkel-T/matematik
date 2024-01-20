import { round } from "@math/utils";
import type { Ans, Op } from ".";

/**
 * Add a percent sign to the `calculation` and `equation` properties of an `Op`.
 */
export const pct = ({ answer, calculation, equation }: Op): Op => ({
  answer,
  calculation: `${calculation}\\%`,
  equation: `${equation}\\%`,
});

/**
 * Add a percent sign to the `answer` property of an `Op`.
 */
export const ansPct = (val: Op): Ans => ({
  ...val,
  answer: round(val.answer) + "\\%",
});

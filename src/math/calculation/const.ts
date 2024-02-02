import type { Op } from ".";

/**
 * Constant for Pi
 */
export const pi = (): Op => ({
  answer: Math.PI,
  calculation: "\\pi",
  equation: "\\pi",
});

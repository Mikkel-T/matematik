export interface Ans {
  answer: number;
  calculation: string;
  equation: string;
}

export interface FinalAns {
  answer: string | number;
  calculation: string;
  equation: string;
}

/**
 * Converts a number and a name to an `Ans` object
 */
export const n = (num: number, name: string): Ans => ({
  answer: num,
  calculation: num.toString(),
  equation: name,
});

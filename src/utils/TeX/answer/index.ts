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
 * Convert a number and a name to an `Ans` object. If no name is provided, the name will be the number as a string
 */
export const na = (num: number, name?: string): Ans => ({
  answer: num,
  calculation: num.toString(),
  equation: name || num.toString(),
});

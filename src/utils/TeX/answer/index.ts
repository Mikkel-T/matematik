import { Except } from "type-fest";

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

export const omitAns = (ans: FinalAns): Except<FinalAns, "answer"> => {
  const { answer, ...result } = ans;
  return result;
};

export const omitCalc = (ans: FinalAns): Except<FinalAns, "calculation"> => {
  const { calculation, ...result } = ans;
  return result;
};

export const omitEq = (ans: FinalAns): Except<FinalAns, "equation"> => {
  const { equation, ...result } = ans;
  return result;
};

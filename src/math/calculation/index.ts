export interface Op {
  answer: number;
  calculation: string;
  equation: string;
}

export interface Ans {
  answer: string | number;
  calculation: string;
  equation: string;
}

/**
 * Convert a number and a name to an `Op` object. If no name is provided, the name will be the number as a string
 */
export const na = (num: number, name?: string): Op => ({
  answer: num,
  calculation: num < 0 ? `(${num.toString()})` : num.toString(),
  equation: name || num.toString(),
});

export const omitAns = (ans: Ans): Omit<Ans, "answer"> => {
  const { answer, ...result } = ans;
  return result;
};

export const omitCalc = (ans: Ans): Omit<Ans, "calculation"> => {
  const { calculation, ...result } = ans;
  return result;
};

export const omitEq = (ans: Ans): Omit<Ans, "equation"> => {
  const { equation, ...result } = ans;
  return result;
};

export function text(str: string) {
  return `\\text{${str}}`;
}

export * from "./common";
export * from "./const";
export * from "./percent";
export * from "./trig";
export * from "./trigUses";
export * from "./vector";
export * from "./visual";

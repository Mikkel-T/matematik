import * as calc from "@math/trig";

import { add } from "@store/answer";
import { answer } from "@store/shape";

type TrigFunction = "cos" | "sin" | "tan";

export function sqrtCalc({
  key,
  first,
  operator,
  second,
  vals,
}: {
  key: string;
  first: string;
  operator: "+" | "-";
  second: string;
  vals: Record<string, number>;
}) {
  if (operator === "+") {
    answer.setKey(key, Math.sqrt(vals[first] ** 2 + vals[second] ** 2));
  } else {
    answer.setKey(key, Math.sqrt(vals[first] ** 2 - vals[second] ** 2));
  }
  add({
    name: key,
    calculation: `\\sqrt{${vals[first]}^{2} + ${vals[second]}^{2}}`,
    equation: `\\sqrt{${first}^{2} + ${second}^{2}}`,
  });
}

export function inverseFrac({
  key,
  func,
  top,
  bottom,
  vals,
}: {
  key: string;
  func: TrigFunction;
  top: string;
  bottom: string;
  vals: Record<string, number>;
}) {
  answer.setKey(key, calc["a" + func](vals[top] / vals[bottom]));

  add({
    name: key,
    calculation: `\\a${func}^{-1}\\left(\\frac{${vals[top]}}{${vals[bottom]}}\\right)`,
    equation: `\\a${func}^{-1}\\left(\\frac{${top}}{${bottom}}\\right)`,
  });
}

export function fracCalc({
  key,
  func,
  top,
  bottom,
  vals,
}: {
  key: string;
  func: TrigFunction;
  top: string;
  bottom: string;
  vals: Record<string, number>;
}) {
  answer.setKey(key, vals[top] / calc[func](vals[bottom]));

  add({
    name: key,
    calculation: `\\frac{${vals[top]}}{\\${func}(${vals[bottom]})}`,
    equation: `\\frac{${top}}{\\${func}(${bottom})}`,
  });
}

export function angleCalc({
  key,
  angle,
  vals,
}: {
  key: string;
  angle: string;
  vals: Record<string, number>;
}) {
  answer.setKey(key, 180 - vals.C - vals[angle]);

  add({
    name: key,
    calculation: `180 - C - ${vals[angle]}`,
    equation: `180 - C - ${angle}`,
  });
}

export function multiplyCalc({
  key,
  first,
  func,
  second,
  vals,
}: {
  key: string;
  first: string;
  func: TrigFunction;
  second: string;
  vals: Record<string, number>;
}) {
  answer.setKey(key, vals[first] * calc[func](vals[second]));

  add({
    name: key,
    calculation: `${vals[first]} \\cdot \\${func}(${vals[second]})`,
    equation: `${first} \\cdot \\${func}(${second})`,
  });
}

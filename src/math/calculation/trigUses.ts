import {
  acos,
  add,
  asin,
  atan,
  cos,
  frac,
  mul,
  na,
  pow,
  sin,
  sqrt,
  sub,
  tan,
} from ".";

import type { Op } from ".";

type TrigFunction = "cos" | "sin" | "tan";

export function sqrtCalc({
  first,
  second,
  operator,
}: {
  first: Op;
  second: Op;
  operator: "+" | "-";
}): Op {
  const op = operator === "+" ? add : sub;
  return sqrt(op(pow(first, na(2)), pow(second, na(2))));
}

export function inverseFrac({
  func,
  top,
  bottom,
}: {
  func: TrigFunction;
  top: Op;
  bottom: Op;
}): Op {
  let fun: (x: Op) => Op;
  if (func === "cos") fun = acos;
  else if (func === "sin") fun = asin;
  else fun = atan;

  return fun(frac(top, bottom));
}

export function fracCalc({
  func,
  top,
  bottom,
}: {
  func: TrigFunction;
  top: Op;
  bottom: Op;
}): Op {
  let fun: (x: Op) => Op;
  if (func === "cos") fun = cos;
  else if (func === "sin") fun = sin;
  else fun = tan;

  return frac(top, fun(bottom));
}

export function angleCalc({ angle }: { angle: Op }): Op {
  return sub(sub(na(180), na(90, "C")), angle);
}

export function multiplyCalc({
  first,
  func,
  second,
}: {
  first: Op;
  func: TrigFunction;
  second: Op;
}): Op {
  let fun: (x: Op) => Op;
  if (func === "cos") fun = cos;
  else if (func === "sin") fun = sin;
  else fun = tan;

  return mul(first, fun(second));
}

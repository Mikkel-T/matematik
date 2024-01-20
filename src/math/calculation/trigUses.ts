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

// export function sqrtCalc({
//   key,
//   first,
//   operator,
//   second,
//   vals,
// }: {
//   key: string;
//   first: string;
//   operator: "+" | "-";
//   second: string;
//   vals: Record<string, number>;
// }) {
//   const op = operator === "+" ? add : sub;
//   shapeEqualsAdd({
//     name: key,
//     ...sqrt(
//       op(
//         pow(na(vals[first], first), na(2)),
//         pow(na(vals[second], second), na(2))
//       )
//     ),
//   });
// }

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

// export function inverseFrac({
//   key,
//   func,
//   top,
//   bottom,
//   vals,
// }: {
//   key: string;
//   func: TrigFunction;
//   top: string;
//   bottom: string;
//   vals: Record<string, number>;
// }) {
//   let fun: (x: Ans) => Ans;
//   if (func === "cos") fun = acos;
//   else if (func === "sin") fun = asin;
//   else fun = atan;

//   shapeEqualsAdd({
//     name: key,
//     ...fun(frac(na(vals[top], top), na(vals[bottom], bottom))),
//   });
// }

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

// export function fracCalc({
//   key,
//   func,
//   top,
//   bottom,
//   vals,
// }: {
//   key: string;
//   func: TrigFunction;
//   top: string;
//   bottom: string;
//   vals: Record<string, number>;
// }) {
//   let fun: (x: Ans) => Ans;
//   if (func === "cos") fun = cos;
//   else if (func === "sin") fun = sin;
//   else fun = tan;

//   shapeEqualsAdd({
//     name: key,
//     ...frac(na(vals[top], top), fun(na(vals[bottom], bottom))),
//   });
// }

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

// export function angleCalc({
//   key,
//   angle,
//   vals,
// }: {
//   key: string;
//   angle: string;
//   vals: Record<string, number>;
// }) {
//   shapeEqualsAdd({
//     name: key,
//     ...sub(sub(na(180), na(90, "C")), na(vals[angle], angle)),
//   });
// }

export function angleCalc({ angle }: { angle: Op }): Op {
  return sub(sub(na(180), na(90, "C")), angle);
}

// export function multiplyCalc({
//   key,
//   first,
//   func,
//   second,
//   vals,
// }: {
//   key: string;
//   first: string;
//   func: TrigFunction;
//   second: string;
//   vals: Record<string, number>;
// }) {
//   let fun: (x: Ans) => Ans;
//   if (func === "cos") fun = cos;
//   else if (func === "sin") fun = sin;
//   else fun = tan;

//   shapeEqualsAdd({
//     name: key,
//     ...mul(na(vals[first], first), fun(na(vals[second], second))),
//   });
// }

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

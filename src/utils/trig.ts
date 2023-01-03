import {
  type Ans,
  acos,
  add,
  asin,
  atan,
  cos,
  frac,
  mul,
  n,
  pow,
  sin,
  sqrt,
  sub,
  tan,
} from "@utils/TeX";

import { shapeEqualsAdd } from "@store/shape";

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
  const op = operator === "+" ? add : sub;
  shapeEqualsAdd({
    name: key,
    ...sqrt(
      op(
        pow(n(vals[first], first), n(2, "2")),
        pow(n(vals[second], second), n(2, "2"))
      )
    ),
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
  let fun: (x: Ans) => Ans;
  if (func === "cos") fun = acos;
  else if (func === "sin") fun = asin;
  else fun = atan;

  shapeEqualsAdd({
    name: key,
    ...fun(frac(n(vals[top], top), n(vals[bottom], bottom))),
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
  let fun: (x: Ans) => Ans;
  if (func === "cos") fun = cos;
  else if (func === "sin") fun = sin;
  else fun = tan;

  shapeEqualsAdd({
    name: key,
    ...frac(n(vals[top], top), fun(n(vals[bottom], bottom))),
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
  shapeEqualsAdd({
    name: key,
    ...sub(sub(n(180, "180"), n(90, "C")), n(vals[angle], angle)),
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
  let fun: (x: Ans) => Ans;
  if (func === "cos") fun = cos;
  else if (func === "sin") fun = sin;
  else fun = tan;

  shapeEqualsAdd({
    name: key,
    ...mul(n(vals[first], first), fun(n(vals[second], second))),
  });
}

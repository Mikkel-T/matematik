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

export function cosrelSidesToAngle({
  first,
  second,
  opposite,
}: {
  first: Op;
  second: Op;
  opposite: Op;
}) {
  return acos(
    frac(
      sub(add(pow(first, na(2)), pow(second, na(2))), pow(opposite, na(2))),
      mul(na(2), mul(first, second)),
    ),
  );
}

export function cosrelSidesAngleToSide({
  angle,
  first,
  second,
}: {
  angle: Op;
  first: Op;
  second: Op;
}) {
  return sqrt(
    sub(
      add(pow(first, na(2)), pow(second, na(2))),
      mul(mul(na(2), first), mul(second, cos(angle))),
    ),
  );
}

export function sinrelSidesAngleToAngle({
  /**
   * The side opposite the angle we are trying to find
   */
  opposite,
  /**
   * The angle we know
   */
  angle,
  /**
   * The side opposite the angle we know
   */
  angleOpposite,
}: {
  opposite: Op;
  angle: Op;
  angleOpposite: Op;
}) {
  return asin(frac(mul(opposite, sin(angle)), angleOpposite));
}

export function sinrelAnglesSideToSide({
  /**
   * The opposite angle of the side we are trying to find
   */
  opposite,
  /**
   * The side we know
   */
  side,
  /**
   * The angle opposite the side we know
   */
  sideOpposite,
}: {
  opposite: Op;
  side: Op;
  sideOpposite: Op;
}) {
  return frac(mul(side, sin(opposite)), sin(sideOpposite));
}

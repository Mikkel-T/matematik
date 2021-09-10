import {
  create,
  evaluateDependencies,
  parseDependencies,
  tan as mTan,
  cos as mCos,
  sin as mSin,
  atan as mAtan,
  acos as mAcos,
  asin as mAsin,
  pi,
  sqrtDependencies,
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  piDependencies,
  factorialDependencies,
  powDependencies,
  unaryMinusDependencies,
  ConstantNodeDependencies,
} from 'mathjs/number';

import p from './Parser';

const math = create({
  evaluateDependencies,
  sqrtDependencies,
  addDependencies,
  subtractDependencies,
  multiplyDependencies,
  divideDependencies,
  piDependencies,
  factorialDependencies,
  powDependencies,
  unaryMinusDependencies,
  parseDependencies,
  ConstantNodeDependencies,
});

const tan = (x) => mTan((x * pi) / 180);
const cos = (x) => mCos((x * pi) / 180);
const sin = (x) => mSin((x * pi) / 180);
const atan = (x) => (mAtan(x) * 180) / pi;
const acos = (x) => (mAcos(x) * 180) / pi;
const asin = (x) => (mAsin(x) * 180) / pi;

math.import({ tan, cos, sin, atan, acos, asin }, { override: true });

export function GetAnswer(expr, scope, entered) {
  let answer = {};
  let expression = math.parse(expr);
  let transformed = expression.transform((node) => {
    if (node.isSymbolNode && Object.keys(scope).includes(node.name)) {
      return new math.ConstantNode(+p(scope[node.name]));
    } else {
      return node;
    }
  });
  if (entered) {
    transformed = math.parse(`${transformed} blev indtastet`);
  }
  answer['calculation'] = transformed.toTex();
  answer['answer'] = p(expression.evaluate(scope));
  return answer;
}

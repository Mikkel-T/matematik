import math from 'mathjs/lib/browser/math.js';

const tan = (x) => mTan((x * pi) / 180);
const cos = (x) => mCos((x * pi) / 180);
const sin = (x) => mSin((x * pi) / 180);
const atan = (x) => (mAtan(x) * 180) / pi;
const acos = (x) => (mAcos(x) * 180) / pi;
const asin = (x) => (mAsin(x) * 180) / pi;

math.import({ tan, cos, sin, atan, acos, asin }, { override: true });

export function Calc(expr, scope, entered) {
  let answer = {};
  let expression = math.parse(expr);
  let transformed = expression.transform((node) => {
    if (node.isSymbolNode && Object.keys(scope).includes(node.name)) {
      return new math.ConstantNode(parseFloat((+scope[node.name]).toFixed(4)));
    } else {
      return node;
    }
  });
  if (entered) {
    transformed = math.parse(`${transformed} blev indtastet`);
  }
  answer['equation'] = math.parse(expr).toTex();
  answer['calculation'] = transformed.toTex();
  answer['answer'] = parseFloat(expression.evaluate(scope).toFixed(4));
  return answer;
}

export function ValidateCheck(check, vars) {
  if (math.evaluate(check.check, vars)) {
    throw new Error(check.message);
  }
}

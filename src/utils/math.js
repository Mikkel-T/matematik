import math from 'mathjs/lib/browser/math.js';

const tan = (x) => Math.tan((x * Math.PI) / 180);
const cos = (x) => Math.cos((x * Math.PI) / 180);
const sin = (x) => Math.sin((x * Math.PI) / 180);
const atan = (x) => (Math.atan(x) * 180) / Math.PI;
const acos = (x) => (Math.acos(x) * 180) / Math.PI;
const asin = (x) => (Math.asin(x) * 180) / Math.PI;

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
    expr = `${expr} blev indtastet`;
  }
  answer.equation = math.parse(expr).toTex();
  answer.calculation = transformed.toTex();
  answer.answer = parseFloat(expression.evaluate(scope).toFixed(4));
  answer.unicode = {
    equation: math.parse(expr).toString(),
    calculation: transformed.toString(),
    answer: answer.answer,
  };
  return answer;
}

export function ValidateCheck(check, vars) {
  if (math.evaluate(check.check, vars)) {
    throw new Error(check.message);
  }
}

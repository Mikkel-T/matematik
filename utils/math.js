import {
  create,
  evaluateDependencies,
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
} from 'mathjs/number';

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
});

const tan = (x) => mTan((x * pi) / 180);
const cos = (x) => mCos((x * pi) / 180);
const sin = (x) => mSin((x * pi) / 180);
const atan = (x) => (mAtan(x) * 180) / pi;
const acos = (x) => (mAcos(x) * 180) / pi;
const asin = (x) => (mAsin(x) * 180) / pi;

math.import({ tan, cos, sin, atan, acos, asin }, { override: true });

export const evaluate = math.evaluate;

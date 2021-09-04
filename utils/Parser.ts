import { POptions } from '@interfaces/index';

export default function p(num: string | number, options?: POptions) {
  let ans: string | number = parse0(num);
  if (options) {
    if (options.n) {
      ans = parseNegative(ans, options.n);
    }
  }
  return ans.toString();
}

export function parse0(num: string | number) {
  return num ? parseFloat((+num).toFixed(3)) : 0;
}

export function parseNegative(num: number, o: '+' | '-') {
  let ans;
  if (o === '+') {
    ans = `${num > 0 ? '+' : '-'}${Math.abs(num)}`;
  } else {
    ans = `${num < 0 ? '+' : '-'}${Math.abs(num)}`;
  }
  return ans;
}

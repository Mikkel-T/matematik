import p from '@utils/Parser';
import { sqrt, frac } from '@utils/Tex';

export function SqrtCalc({
  first,
  sign,
  second,
}: {
  first: string;
  sign: '+' | '-';
  second: string;
}) {
  return sqrt(`${p(first)}^2 ${sign} ${p(second)}^2`);
}

export function InverseCalc({
  f,
  t,
  n,
}: {
  f: 'cos' | 'sin' | 'tan';
  t: string;
  n: string;
}) {
  return `${f}^{-1}(${frac({ t: p(t), n: p(n) })})`;
}

export function FracCalc({
  f,
  t,
  n,
}: {
  f: 'cos' | 'sin' | 'tan';
  t: string;
  n: string;
}) {
  return frac({ t: p(t), n: `${f}(${p(n)})` });
}

export function AngleCalc({ value }: { value: string }) {
  return `180 - 90 - ${p(value)}`;
}

export function MultiplyCalc({
  first,
  f,
  second,
}: {
  first: string;
  f: 'cos' | 'sin' | 'tan';
  second: string;
}) {
  return `${p(first)} * ${f}(${p(second)})`;
}

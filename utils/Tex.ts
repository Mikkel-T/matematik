import { FractionProps } from '@interfaces/index';

export function sqrt(n: string | number) {
  return `\\sqrt{${n}}`;
}

export function frac({ t, n }: FractionProps) {
  return `\\frac{${t}}{${n}}`;
}

export function text(str: string) {
  return str.replaceAll(' ', '\\ ');
}

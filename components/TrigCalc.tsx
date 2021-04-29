import Fraction from './Fraction';

export function SqrtCalc({
  first,
  sign,
  second,
}: {
  first: string;
  sign: string;
  second: string;
}) {
  return (
    <>
      √{first}
      <sup>2</sup> {sign} {second}
      <sup>2</sup>
    </>
  );
}

export function InverseCalc({ f, t, n }: { f: string; t: string; n: string }) {
  return (
    <>
      {f}
      <sup>-1</sup>(<Fraction t={t} n={n} />)
    </>
  );
}

export function FracCalc({ f, t, n }: { f: string; t: string; n: string }) {
  return (
    <>
      <Fraction t={t} n={`${f}(${n})`} />
    </>
  );
}

export function AngleCalc({ value }: { value: string }) {
  return <>180 - 90 - {value}</>;
}

export function MultiplyCalc({
  first,
  f,
  second,
}: {
  first: string;
  f: string;
  second: string;
}) {
  return (
    <>
      {first} * {f}({second})
    </>
  );
}

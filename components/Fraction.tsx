import { FractionProps } from '@interfaces/index';

export default function Fraction({ t, n }: FractionProps) {
  return (
    <div className="inline-block flex-row relative align-middle">
      <div className="border-b p-0 border-nord6">{t}</div>
      <div>{n}</div>
    </div>
  );
}

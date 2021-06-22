import { FractionProps } from '@interfaces/index';

export default function Fraction({ t, n }: FractionProps) {
  return (
    <div className="relative flex-row inline-block align-middle">
      <div className="border-nord6 p-0 border-b">{t}</div>
      <div>{n}</div>
    </div>
  );
}

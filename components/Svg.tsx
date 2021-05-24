import { CircleProps, PathProps, SvgProps, TextProps } from '@interfaces/Svg';

export default function Svg({ children, height, width }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      className="stroke-2 fill-transparent m-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function Path({ d, className }: PathProps) {
  return <path stroke="currentColor" d={d} className={className} />;
}

export function Circle({ x, y, r, className }: CircleProps) {
  return (
    <circle cx={x} cy={y} r={r} stroke="currentColor" className={className} />
  );
}

export function Text({ x, y, text }: TextProps) {
  return (
    <text x={x} y={y} className="fill-current stroke-0">
      {text}
    </text>
  );
}

import {
  CircleProps,
  InputProps,
  PathProps,
  SvgProps,
  TextProps,
} from '@interfaces/Svg';

export default function Svg({ children, height, width }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      className="fill-transparent m-auto stroke-2"
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

export function Input({
  name,
  value,
  readOnly,
  onChange,
  className,
  placeholder,
  min,
}: InputProps) {
  return (
    <input
      type="number"
      step="any"
      name={name}
      id={name}
      placeholder={placeholder || name}
      value={value}
      readOnly={readOnly}
      className={`${
        readOnly && 'opacity-50'
      } rounded-md dark:bg-nord1 bg-nord5 border p-2 w-36 ${className}`}
      onChange={(e) => onChange(e)}
      min={min && min}
    />
  );
}

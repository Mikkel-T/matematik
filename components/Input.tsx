import { InputProps } from '@interfaces/index';

export default function Input({ name, placeholder, value, onChange: setInput, label }: InputProps) {
  return (
    <div className="md:w-2/6 w-3/4 m-auto text-left">
      <div className="pl-1">
        <label htmlFor={name} className="font-bold">
          {label || name}:
        </label>
      </div>
      <input
        type="number"
        step="any"
        name={name}
        id={name}
        placeholder={placeholder || name}
        value={value}
        onChange={(e) => setInput(e.target.value)}
        className="dark:bg-nord1 dark:border-nord3 bg-nord5 border-nord4 focus:ring-nord10 focus:border-nord10 w-full p-2 border rounded-md"
      />
    </div>
  );
}

export function Percent({ name, value, onChange: setInput }: InputProps) {
  return (
    <input
      type="number"
      step="any"
      name={name}
      id={name}
      value={value}
      onChange={(e) => setInput(e.target.value)}
      className="border-nord3 focus:ring-0 focus:border-nord10 w-20 p-2 border-0 border-b-2 bg-transparent"
    />
  );
}

import { InputProps } from '@interfaces/index';

export default function Input({
  name,
  placeholder,
  value,
  onChange: setInput,
  label,
}: InputProps) {
  return (
    <div className="w-3/4 md:w-2/6 m-auto text-left">
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
        className="w-full p-2 rounded-md bg-nord1 border border-nord3 focus:ring-nord10 focus:border-nord10"
      />
    </div>
  );
}

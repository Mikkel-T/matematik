import { CalculatorProps } from '@interfaces/index';
import { FormEvent } from 'react';

import Answer from './Answer';
import Input from './Input';

export default function Calculator({
  inputs,
  calculate,
  answers,
  children,
}: CalculatorProps) {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    calculate();
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        {inputs &&
          inputs.map((input, i) => (
            <div className="my-3" key={i}>
              <Input
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                label={input.label}
              />
            </div>
          ))}
        <div>{children}</div>
        <div>
          <input
            type="submit"
            className="bg-nord2 hover:bg-nord3 hover:border-nord2 border-nord3 md:w-2/6 focus:outline-none w-3/4 p-2 mt-3 border-2 rounded-md"
            value="Beregn"
          />
        </div>
      </form>
      <div className="my-3">
        {answers.filter((e) => e.answer)[0] && (
          <div className="text-nord4 text-lg font-bold">Svar:</div>
        )}
        {answers.map((ans, i) => (
          <div key={i}>
            {typeof ans.answer !== 'undefined' && (
              <Answer name={ans.name} answer={ans.answer} />
            )}
          </div>
        ))}
      </div>
      <div className="my-3">
        {answers.filter((e) => e.calculation)[0] && (
          <div className="text-nord4 text-lg font-bold">Beregninger:</div>
        )}
        {answers.map((ans, i) => (
          <div key={i}>
            {typeof ans.calculation !== 'undefined' && (
              <Answer name={ans.name} answer={ans.calculation} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

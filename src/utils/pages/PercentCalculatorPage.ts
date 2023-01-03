import { Except } from "type-fest";

import DefaultPage from "./DefaultPage";

export default class PercentCalculatorPage<
  T extends string
> extends DefaultPage {
  readonly type = "percent_calculator";

  calculator: {
    text: `${string}:input_${T}:${string}:input_${T}:${string}`;
    calculate(vals: Record<T, number>): void;
  };

  constructor(vals: Except<PercentCalculatorPage<T>, "type">) {
    super(vals);
    this.calculator = vals.calculator;
  }
}

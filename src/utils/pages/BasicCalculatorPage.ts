import { Except } from "type-fest";

import DefaultPage from "./DefaultPage";

export default class BasicCalculatorPage<T extends string> extends DefaultPage {
  readonly type = "basic_calculator";

  calculator: {
    inputs: { name: T; label?: string; placeholder?: string }[];
    text?: Array<(vals: Record<T, number>) => string>;
    calculate(vals: Record<T, number>): void;
  };

  constructor(vals: Except<BasicCalculatorPage<T>, "type">) {
    super(vals);
    this.calculator = vals.calculator;
  }
}

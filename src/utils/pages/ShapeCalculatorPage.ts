import { SvelteComponentTyped } from "svelte";
import { Except } from "type-fest";

import DefaultPage from "./DefaultPage";

export default class ShapeCalculatorPage extends DefaultPage {
  readonly type = "shape_calculator";

  calculator: {
    component: SvelteComponentTyped;
    calculate(vals: Record<string, number>): void;
  };

  constructor(vals: Except<ShapeCalculatorPage, "type">) {
    super(vals);
    this.calculator = vals.calculator;
  }
}

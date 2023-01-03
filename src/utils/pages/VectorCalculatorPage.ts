import { Except } from "type-fest";

import DefaultPage from "./DefaultPage";

export default class VectorCalculatorPage<
  Name extends string,
  Type extends "number" | "coordinate" | "vector",
  Input extends { type: Type; name: Name }
> extends DefaultPage {
  readonly type = "vector_calculator";

  calculator: {
    inputs: Input[];
    text?: string;
    calculate(
      vals: Record<
        keyof {
          [I in Input as I["type"] extends "number"
            ? I["name"]
            : `${I["name"]}${"1" | "2"}`];
        },
        number
      >
    ): void;
  };

  constructor(vals: Except<VectorCalculatorPage<Name, Type, Input>, "type">) {
    super(vals);
    this.calculator = vals.calculator;
  }
}

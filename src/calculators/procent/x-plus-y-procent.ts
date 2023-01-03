import { add, frac, mul, n, par } from "@utils/TeX";

import { PercentCalculatorPage } from "@interfaces/calculators";

import { hideAdd } from "@store/answer";

const xPlusYProcent: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvad er x plus y procent",
  description: "En procent beregner der udregner et tal plus en procentdel",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        ...mul(n(x, "x"), par(add(n(1, "1"), frac(n(y, "y"), n(100, "100"))))),
        equation: undefined,
      });
    },
    text: "Hvad er :input_x: plus :input_y: procent",
  },
};

export default xPlusYProcent;

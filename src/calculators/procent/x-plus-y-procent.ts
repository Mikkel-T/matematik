import { add, frac, mul, na, par } from "@utils/TeX";

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
        ...mul(na(x, "x"), par(add(na(1), frac(na(y, "y"), na(100))))),
        equation: undefined,
      });
    },
    text: "Hvad er :input_x: plus :input_y: procent",
  },
};

export default xPlusYProcent;

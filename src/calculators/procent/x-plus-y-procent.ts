import { add, frac, mul, na, omitEq, par } from "@utils/TeX";

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
        ...omitEq(mul(na(x, "x"), par(add(na(1), frac(na(y, "y"), na(100)))))),
      });
    },
    text: "Hvad er :input_x: plus :input_y: procent",
  },
};

export default xPlusYProcent;

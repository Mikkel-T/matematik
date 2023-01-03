import { frac, mul, n, par, sub } from "@utils/TeX";

import { PercentCalculatorPage } from "@interfaces/calculators";

import { hideAdd } from "@store/answer";

const xMinusYProcent: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvad er x minus y procent",
  description: "En procent beregner der udregner et tal minus en procentdel",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        ...mul(n(x, "x"), par(sub(n(1, "1"), frac(n(y, "y"), n(100, "100"))))),
        equation: undefined,
      });
    },
    text: "Hvad er :input_x: minus :input_y: procent",
  },
};

export default xMinusYProcent;

import { frac, mul, n } from "@utils/TeX";

import { PercentCalculatorPage } from "@interfaces/calculators";

import { hideAdd } from "@store/answer";

const xProcentAfY: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvad er x procent af y",
  description:
    "En procent beregner der udregner hvilken andel en procent er af et tal",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        ...frac(mul(n(y, "y"), n(x, "x")), n(100, "100")),
        equation: undefined,
      });
    },
    text: "Hvad er :input_x: procent af :input_y:",
  },
};

export default xProcentAfY;

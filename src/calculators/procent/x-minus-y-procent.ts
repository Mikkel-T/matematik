import { frac, mul, na, par, sub } from "@utils/TeX";

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
        ...mul(na(x, "x"), par(sub(na(1), frac(na(y, "y"), na(100))))),
        equation: undefined,
      });
    },
    text: "Hvad er :input_x: minus :input_y: procent",
  },
};

export default xMinusYProcent;

import { frac, mul, na, omitEq, par, sub } from "@utils/TeX";

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
        ...omitEq(mul(na(x, "x"), par(sub(na(1), frac(na(y, "y"), na(100)))))),
      });
    },
    text: "Hvad er :input_x: minus :input_y: procent",
  },
};

export default xMinusYProcent;

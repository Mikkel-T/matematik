import { frac, mul, n, pct } from "@utils/TeX";

import { PercentCalculatorPage } from "@interfaces/calculators";

import { hideAdd } from "@store/answer";

const heleTallet: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvad er hele tallet når x procent er y",
  description:
    "En procent beregner der udregner et tal når man kender en procentdel af det",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        ...mul(frac(n(y, "y"), pct(n(x, "x"))), pct(n(100, "100"))),
        equation: undefined,
      });
    },
    text: "Beregn hele tallet når :input_x: procent er :input_y:",
  },
};

export default heleTallet;

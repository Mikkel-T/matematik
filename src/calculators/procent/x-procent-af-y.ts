import { frac, mul, na, omitEq } from "@utils/TeX";
import PercentCalculatorPage from "@utils/pages/PercentCalculatorPage";

import { hideAdd } from "@store/answer";

export default new PercentCalculatorPage({
  title: "Hvad er x procent af y",
  description:
    "En procent beregner der udregner hvilken andel en procent er af et tal",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        ...omitEq(frac(mul(na(y, "y"), na(x, "x")), na(100))),
      });
    },
    text: "Hvad er :input_x: procent af :input_y:",
  },
});

import { ansPct, frac, mul, na, omitEq, pct } from "@utils/TeX";
import PercentCalculatorPage from "@utils/pages/PercentCalculatorPage";

import { hideAdd } from "@store/answer";

export default new PercentCalculatorPage({
  title: "Hvor mange procent er x af y",
  description:
    "En procent beregner der udregner hvilken procentdel et tal udgør af et andet",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        ...omitEq(ansPct(mul(frac(na(x, "x"), na(y, "y")), pct(na(100))))),
      });
    },
    text: "Hvor mange procent er :input_x: af :input_y:",
  },
});

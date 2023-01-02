import { PercentCalculatorPage } from "@interfaces/calculators";

import { hideAdd } from "@store/answer";

const xAfY: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvor mange procent er x af y",
  description:
    "En procent beregner der udregner hvilken procentdel et tal udgør af et andet",
  calculator: {
    calculate({ x, y }) {
      hideAdd({
        name: "Svar",
        calculation: `\\frac{${x}}{${y}} \\cdot 100\\%`,
        answer: (x / y) * 100 + "\\%",
      });
    },
    text: "Hvor mange procent er :input_x: af :input_y:",
  },
};

export default xAfY;

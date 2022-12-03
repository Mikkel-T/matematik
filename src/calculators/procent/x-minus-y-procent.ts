import { PercentCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const xMinusYProcent: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvad er x minus y procent",
  description: "En procent beregner der udregner et tal minus en procentdel",
  calculator: {
    calculate({ x, y }) {
      add({
        name: "Svar",
        calculation: `${x} \\cdot (1 - \\frac{${y}}{100})`,
        answer: x * (1 - y / 100),
      });
    },
    text: "Hvad er :input_x: minus :input_y: procent",
  },
};

export default xMinusYProcent;

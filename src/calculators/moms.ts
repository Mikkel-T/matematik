import { BasicCalculatorPage } from "@interfaces/calculators";

import { textAdd } from "@store/answer";

const moms: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Moms",
  SEOtitle: "Moms beregner",
  description: "En momsberegner der udregner en pris med og uden moms",
  calculator: {
    inputs: [{ name: "Pris" }],
    calculate({ Pris }) {
      textAdd({
        name: "Pris med moms",
        answer: Pris * 1.25,
        calculation: `${Pris} \\cdot 1,25`,
        equation: "Pris \\cdot 1,25",
      });
      textAdd({
        name: "Pris uden moms",
        answer: Pris / 1.25,
        calculation: `\\frac{${Pris}}{1,25}`,
        equation: "\\frac{Pris}{1,25}",
      });
    },
  },
};

export default moms;

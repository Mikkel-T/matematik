import { BasicCalculatorPage } from "@interfaces/calculators";

const moms: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Moms",
  SEOtitle: "Moms beregner",
  description: "En momsberegner der udregner en pris med og uden moms",
  calculator: {
    inputs: [{ name: "Pris" }],
    calculations: [
      {
        name: "Pris med moms",
        calc: ({ Pris }) => ({
          answer: Pris * 1.25,
          calculation: `${Pris} \\cdot 1,25`,
          equation: "Pris \\cdot 1,25",
        }),
      },
      {
        name: "Pris uden moms",
        calc: ({ Pris }) => ({
          answer: Pris / 1.25,
          calculation: `\\frac{${Pris}}{1,25}`,
          equation: "\\frac{Pris}{1,25}",
        }),
      },
    ],
  },
};

export default moms;

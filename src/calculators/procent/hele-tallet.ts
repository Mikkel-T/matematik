import { PercentCalculatorPage } from "@interfaces/calculators";

const heleTallet: PercentCalculatorPage = {
  type: "percent_calculator",
  title: "Hvad er hele tallet når x procent er y",
  description:
    "En procent beregner der udregner et tal når man kender en procentdel af det",
  calculator: {
    calculations: [
      {
        name: "Svar",
        calc: ({ x, y }) => ({
          calculation: `\\frac{${y}}{${x}\\%} \\cdot 100\\%`,
          answer: (y / x) * 100,
        }),
      },
    ],
    text: "Beregn hele tallet når :input_x: procent er :input_y:",
  },
};

export default heleTallet;

import { VectorCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const vektorLen: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Vektor-længde",
  SEOtitle: "Vektor-længde beregner",
  description: "En vektorberegner der udregner længden af en vektor",
  calculator: {
    text: "Beregner længden af $\\vec{a}$",
    inputs: [{ type: "vector", name: "a" }],
    calculate({ a1, a2 }) {
      add({
        name: "|\\vec{a}|",
        answer: Math.sqrt(a1 ** 2 + a2 ** 2),
        calculation: `\\sqrt{${a1}^2 + ${a2}^2}`,
        equation: "\\sqrt{a_1^2 + a_2^2}",
      });
    },
  },
};

export default vektorLen;

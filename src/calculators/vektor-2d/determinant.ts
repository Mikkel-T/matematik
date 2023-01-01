import { VectorCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const determinant: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Determinant",
  SEOtitle: "Determinant beregner",
  description: "En vektorberegner der udregner determinanten af to vektorer",
  calculator: {
    text: "Beregner determinanten $\\det(\\vec{a} , \\vec{b})$ af $\\vec{a}$ og $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      add({
        name: "\\det(\\vec{a} , \\vec{b})",
        answer: a1 * b2 - a2 * b1,
        calculation: `${a1} \\cdot ${b2} - ${a2} \\cdot ${b1}`,
        equation: "a_{1} \\cdot b_{2} - a_{2} \\cdot b_{1}",
      });
    },
  },
};

export default determinant;

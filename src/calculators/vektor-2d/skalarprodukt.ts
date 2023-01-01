import { VectorCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const skalarprodukt: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Skalarprodukt",
  SEOtitle: "Skalarprodukt beregner",
  description:
    "En vektorberegner der udregner skalarproduktet mellem to vektorer",
  calculator: {
    text: "Beregner skalarproduktet $\\vec{a} \\bullet \\vec{b}$ mellem $\\vec{a}$ og $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      add({
        name: "\\vec{a} \\bullet \\vec{b}",
        answer: a1 * b1 + a2 * b2,
        calculation: `${a1} \\cdot ${b1} + ${a2} \\cdot ${b2}`,
        equation: "a_{1} \\cdot b_{1} + a_{2} \\cdot b_{2}",
      });
    },
  },
};

export default skalarprodukt;

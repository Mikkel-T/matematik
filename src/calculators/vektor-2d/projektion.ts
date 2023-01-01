import { VectorCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const projektion: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Vektor-projektion",
  SEOtitle: "Projektion af vektor på vektor beregner",
  description:
    "En vektorberegner der beregner projektionen af en vektor på en anden",
  calculator: {
    text: "Beregner $\\vec{a}_{\\vec{b}}$ som er projektionen af $\\vec{a}$ på $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      const k = (a1 * b1 + a2 * b2) / (b1 ** 2 + b2 ** 2);
      add({
        name: "\\vec{a}_{\\vec{b}}",
        answer: `\\begin{pmatrix}${k * b1}\\\\${k * b2}\\end{pmatrix}`,
        calculation: `\\frac{${a1} \\cdot ${b1} + ${a2} \\cdot ${b2}}{${a1}^2 + ${a2}^2} \\cdot \\begin{pmatrix}${b1}\\\\${b2}\\end{pmatrix}`,
        equation:
          "\\frac{\\vec{a} \\bullet \\vec{b}}{\\lvert \\vec{b} \\rvert^{2}} \\cdot \\vec{b}",
      });
    },
  },
};

export default projektion;

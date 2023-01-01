import { VectorCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const subtraktion: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Subtraktion af vektorer",
  SEOtitle: "Vektor-differens beregner",
  description: "En vektorberegner der trækker to vektorer fra hinanden",
  calculator: {
    text: "Beregner $\\vec{a} - \\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      add({
        name: "\\vec{a} - \\vec{b}",
        answer: `\\begin{pmatrix}${a1 - b1}\\\\${a2 - b2}\\end{pmatrix}`,
        calculation: `\\begin{pmatrix}${a1} - ${b1}\\\\${a2} - ${b2}\\end{pmatrix}`,
        equation: "\\begin{pmatrix}a_1 - b_1\\\\a_2 - b_2\\end{pmatrix}",
      });
    },
  },
};

export default subtraktion;

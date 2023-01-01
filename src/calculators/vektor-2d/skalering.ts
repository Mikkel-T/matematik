import { VectorCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const skalering: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Vektor-skalering",
  SEOtitle: "Vektor-skalering beregner",
  description:
    "En vektorberegner der skalerer en vektor ud fra en givet konstant",
  calculator: {
    text: "Beregner $k \\cdot \\vec{a}$",
    inputs: [
      { type: "number", name: "k" },
      { type: "vector", name: "a" },
    ],
    calculate({ k, a1, a2 }) {
      add({
        name: "k \\cdot \\vec{a}",
        answer: `\\begin{pmatrix}${k * a1}\\\\${k * a2}\\end{pmatrix}`,
        calculation: `\\begin{pmatrix}k \\cdot ${a1}\\\\k \\cdot ${a2}\\end{pmatrix}`,
        equation: "\\begin{pmatrix}k \\cdot a_1\\\\k \\cdot a_2\\end{pmatrix}",
      });
    },
  },
};

export default skalering;

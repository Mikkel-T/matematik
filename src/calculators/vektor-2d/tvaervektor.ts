import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const tvaervektor: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Tværvektor",
  SEOtitle: "Tværvektor beregner",
  description:
    "En vektorberegner der beregner tværvektoren for en given vektor",
  calculator: {
    text: "Beregner $\\hat{a}$ som er tværvektoren for $\\vec{a}$",
    inputs: [{ type: "vector", name: "a" }],
    calculate({ a1, a2 }) {
      equalsAdd({
        name: "\\hat{a}",
        answer: `\\begin{pmatrix}${-a2}\\\\${a1}\\end{pmatrix}`,
        equation: "\\begin{pmatrix}-a_2\\\\a_1\\end{pmatrix}",
      });
    },
  },
};

export default tvaervektor;

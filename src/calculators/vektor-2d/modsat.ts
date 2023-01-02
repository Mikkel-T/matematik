import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const modsat: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Modsat vektor",
  SEOtitle: "Modsat vektor beregner",
  description:
    "En vektorberegner der beregner den modsatte vektor af en given vektor",
  calculator: {
    text: "Beregner $-\\vec{a}$ som er den modsatte vektor af $\\vec{a}$",
    inputs: [{ type: "vector", name: "a" }],
    calculate({ a1, a2 }) {
      equalsAdd({
        name: "-\\vec{a}",
        answer: `\\begin{pmatrix}${-a1}\\\\${-a2}\\end{pmatrix}`,
        calculation: `\\begin{pmatrix}-${a1}\\\\-${a2}\\end{pmatrix}`,
        equation: "\\begin{pmatrix}-a_1\\\\-a_2\\end{pmatrix}",
      });
    },
  },
};

export default modsat;

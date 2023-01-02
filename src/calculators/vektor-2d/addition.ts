import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const addition: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Addition af vektorer",
  SEOtitle: "Vektor-sum beregner",
  description: "En vektorberegner der lægger to vektorer sammen",
  calculator: {
    text: "Beregner summen af $\\vec{a}$ og $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      equalsAdd({
        name: "\\vec{a} + \\vec{b}",
        answer: `\\begin{pmatrix}${a1 + b1}\\\\${a2 + b2}\\end{pmatrix}`,
        calculation: `\\begin{pmatrix}${a1} + ${b1}\\\\${a2} + ${b2}\\end{pmatrix}`,
        equation: "\\begin{pmatrix}a_1 + b_1\\\\a_2 + b_2\\end{pmatrix}",
      });
    },
  },
};

export default addition;

import { add, n, pmat } from "@utils/TeX";

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
        ...pmat(
          add(n(a1, "a_1"), n(b1, "b_1")),
          add(n(a2, "a_2"), n(b2, "b_2"))
        ),
      });
    },
  },
};

export default addition;

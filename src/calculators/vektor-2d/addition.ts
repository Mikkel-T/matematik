import { add, na, pmat } from "@utils/TeX";
import VectorCalculatorPage from "@utils/pages/VectorCalculatorPage";

import { equalsAdd } from "@store/answer";

export default new VectorCalculatorPage({
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
          add(na(a1, "a_1"), na(b1, "b_1")),
          add(na(a2, "a_2"), na(b2, "b_2"))
        ),
      });
    },
  },
});

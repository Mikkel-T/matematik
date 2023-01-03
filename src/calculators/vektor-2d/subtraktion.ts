import { n, pmat, sub } from "@utils/TeX";

import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

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
      equalsAdd({
        name: "\\vec{a} - \\vec{b}",
        ...pmat(
          sub(n(a1, "a_1"), n(b1, "b_1")),
          sub(n(a2, "a_2"), n(b2, "b_2"))
        ),
      });
    },
  },
};

export default subtraktion;

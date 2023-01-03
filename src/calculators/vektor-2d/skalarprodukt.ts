import { add, mul, n } from "@utils/TeX";

import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

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
      equalsAdd({
        name: "\\vec{a} \\bullet \\vec{b}",
        ...add(
          mul(n(a1, "a_1"), n(b1, "b_1")),
          mul(n(a2, "a_2"), n(b2, "b_2"))
        ),
      });
    },
  },
};

export default skalarprodukt;

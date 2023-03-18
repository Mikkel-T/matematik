import { mul, na, sub } from "@utils/TeX";
import VectorCalculatorPage from "@utils/pages/VectorCalculatorPage";

import { equalsAdd } from "@store/answer";

export default new VectorCalculatorPage({
  title: "Determinant",
  SEOtitle: "Determinant beregner",
  description: "En vektorberegner der udregner determinanten af to vektorer",
  calculator: {
    text: "Beregner determinanten $\\det(\\vec{a} , \\vec{b})$ af $\\vec{a}$ og $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      equalsAdd({
        name: "\\det(\\vec{a} , \\vec{b})",
        ...sub(
          mul(na(a1, "a_1"), na(b2, "b_2")),
          mul(na(a2, "a_2"), na(b1, "b_1"))
        ),
      });
    },
  },
});

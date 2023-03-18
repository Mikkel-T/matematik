import { na, neg, pmat } from "@utils/TeX";
import VectorCalculatorPage from "@utils/pages/VectorCalculatorPage";

import { equalsAdd } from "@store/answer";

export default new VectorCalculatorPage({
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
        ...pmat(neg(na(a1, "a_1")), neg(na(a2, "a_2"))),
      });
    },
  },
});

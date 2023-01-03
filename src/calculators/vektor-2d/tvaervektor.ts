import { na, neg, omitCalc, pmat } from "@utils/TeX";

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
        ...omitCalc(pmat(neg(na(a2, "a_2")), na(a1, "a_1"))),
      });
    },
  },
};

export default tvaervektor;

import { dotProd, frac, numMulVec, vecLenSq } from "@utils/TeX";
import VectorCalculatorPage from "@utils/pages/VectorCalculatorPage";

import { equalsAdd } from "@store/answer";

export default new VectorCalculatorPage({
  title: "Vektor-projektion",
  SEOtitle: "Projektion af vektor på vektor beregner",
  description:
    "En vektorberegner der beregner projektionen af en vektor på en anden",
  calculator: {
    text: "Beregner $\\vec{a}_{\\vec{b}}$ som er projektionen af $\\vec{a}$ på $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      equalsAdd({
        name: "\\vec{a}_{\\vec{b}}",
        ...numMulVec(
          frac(
            dotProd({ x: a1, y: a2, name: "a" }, { x: b1, y: b2, name: "b" }),
            vecLenSq({ x: b1, y: b2, name: "b" })
          ),
          { x: b1, y: b2, name: "b" }
        ),
      });
    },
  },
});

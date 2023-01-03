import { acos, ansDeg, dotProd, frac, mul, vecLen } from "@utils/TeX";

import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const vinkel: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Vinkel mellem vektorer",
  SEOtitle: "Vinkel mellem vektorer beregner",
  description: "En vektorberegner der udregner vinklen mellem to vektorer",
  calculator: {
    text: "Beregner $\\angle(\\vec{a} , \\vec{b})$ som er vinklen mellem $\\vec{a}$ og $\\vec{b}$",
    inputs: [
      { type: "vector", name: "a" },
      { type: "vector", name: "b" },
    ],
    calculate({ a1, a2, b1, b2 }) {
      equalsAdd({
        name: "\\angle(\\vec{a} , \\vec{b})",
        ...ansDeg(
          acos(
            frac(
              dotProd({ x: a1, y: a2, name: "a" }, { x: b1, y: b2, name: "b" }),
              mul(
                vecLen({ x: a1, y: a2, name: "a" }),
                vecLen({ x: b1, y: b2, name: "b" })
              )
            )
          )
        ),
      });
    },
  },
};

export default vinkel;

import { VectorCalculatorPage } from "@interfaces/calculators";

import { acos } from "@math/trig";

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
        answer: `${acos(
          (a1 * b1 + a2 * b2) /
            (Math.sqrt(a1 ** 2 + a2 ** 2) * Math.sqrt(b1 ** 2 + b2 ** 2))
        )}^{\\circ}`,
        calculation: `\\cos^{-1}\\left(\\frac{${a1} \\cdot ${b1} + ${a2} \\cdot ${b2}}{\\sqrt{${a1}^2 + ${a2}^2} \\cdot \\sqrt{${b1}^2 + ${b2}^2}}\\right)`,
        equation:
          "\\cos^{-1}\\left(\\frac{\\vec{a} \\bullet \\vec{b}}{\\lvert\\vec{a}\\rvert \\cdot \\lvert \\vec{b} \\rvert}\\right)",
      });
    },
  },
};

export default vinkel;

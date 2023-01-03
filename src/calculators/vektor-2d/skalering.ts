import { mul, n, pmat } from "@utils/TeX";

import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const skalering: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Vektor-skalering",
  SEOtitle: "Vektor-skalering beregner",
  description:
    "En vektorberegner der skalerer en vektor ud fra en givet konstant",
  calculator: {
    text: "Beregner $k \\cdot \\vec{a}$",
    inputs: [
      { type: "number", name: "k" },
      { type: "vector", name: "a" },
    ],
    calculate({ k, a1, a2 }) {
      equalsAdd({
        name: "k \\cdot \\vec{a}",
        ...pmat(mul(n(k, "k"), n(a1, "a_1")), mul(n(k, "k"), n(a2, "a_2"))),
        // answer: `\\begin{pmatrix}${k * a1}\\\\${k * a2}\\end{pmatrix}`,
        // calculation: `\\begin{pmatrix}${k} \\cdot ${a1}\\\\${k} \\cdot ${a2}\\end{pmatrix}`,
        // equation: "\\begin{pmatrix}k \\cdot a_1\\\\k \\cdot a_2\\end{pmatrix}",
      });
    },
  },
};

export default skalering;

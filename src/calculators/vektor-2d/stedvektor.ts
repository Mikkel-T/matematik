import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const stedvektor: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Stedvektor",
  SEOtitle: "Stedvektor beregner",
  description:
    "En vektorberegner der beregner stedvektoren for et givent punkt",
  calculator: {
    text: "Beregner stedvektoren $\\vec{OP}$ for punktet $P(p_1 , p_2)$",
    inputs: [{ type: "coordinate", name: "P" }],
    calculate({ P1, P2 }) {
      equalsAdd({
        name: "\\vec{OP}",
        answer: `\\begin{pmatrix}${P1}\\\\${P2}\\end{pmatrix}`,
        equation: "\\begin{pmatrix}p_1\\\\p_2\\end{pmatrix}",
      });
    },
  },
};

export default stedvektor;

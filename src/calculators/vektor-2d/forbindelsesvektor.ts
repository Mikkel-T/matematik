import { VectorCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const forbindelsesvektor: VectorCalculatorPage = {
  type: "vector_calculator",
  title: "Forbindelsesvektor",
  SEOtitle: "Forbindelsesvektor beregner",
  description:
    "En vektorberegner der udregner en forbindelsesvektor ud fra to punkter",
  calculator: {
    text: "Beregner forbindelsesvektoren mellem punkt $A(a_1 , a_2)$ og punkt $B(b_1 , b_2)$",
    inputs: [
      { type: "coordinate", name: "A" },
      { type: "coordinate", name: "B" },
    ],
    calculate({ A1, A2, B1, B2 }) {
      equalsAdd({
        name: "\\vec{AB}",
        answer: `\\begin{pmatrix}${B1 - A1}\\\\${B2 - A2}\\end{pmatrix}`,
        calculation: `\\begin{pmatrix}${B1} - ${A1}\\\\ ${B2} - ${A2}\\end{pmatrix}`,
        equation:
          "\\begin{pmatrix}b_{1} - a_{1}\\\\ b_{2} - a_{2}\\end{pmatrix}",
      });
    },
  },
};

export default forbindelsesvektor;

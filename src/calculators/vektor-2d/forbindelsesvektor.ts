import { na, pmat, sub } from "@utils/TeX";

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
        ...pmat(
          sub(na(B1, "b_1"), na(A1, "a_1")),
          sub(na(B2, "b_2"), na(A2, "a_2"))
        ),
      });
    },
  },
};

export default forbindelsesvektor;

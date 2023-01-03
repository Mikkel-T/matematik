import { add, na, pow, sqrt } from "@utils/TeX";
import VectorCalculatorPage from "@utils/pages/VectorCalculatorPage";

import { equalsAdd } from "@store/answer";

export default new VectorCalculatorPage({
  title: "Vektor-længde",
  SEOtitle: "Vektor-længde beregner",
  description: "En vektorberegner der udregner længden af en vektor",
  calculator: {
    text: "Beregner længden af $\\vec{a}$",
    inputs: [{ type: "vector", name: "a" }],
    calculate({ a1, a2 }) {
      equalsAdd({
        name: "|\\vec{a}|",
        ...sqrt(add(pow(na(a1, "a_1"), na(2)), pow(na(a2, "a_2"), na(2)))),
      });
    },
  },
});

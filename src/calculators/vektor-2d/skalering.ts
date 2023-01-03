import { mul, na, pmat } from "@utils/TeX";
import VectorCalculatorPage from "@utils/pages/VectorCalculatorPage";

import { equalsAdd } from "@store/answer";

export default new VectorCalculatorPage({
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
        ...pmat(mul(na(k, "k"), na(a1, "a_1")), mul(na(k, "k"), na(a2, "a_2"))),
      });
    },
  },
});

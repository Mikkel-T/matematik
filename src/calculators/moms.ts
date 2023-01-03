import { frac, mul, na } from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

import { textAdd } from "@store/answer";

const moms: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Moms",
  SEOtitle: "Moms beregner",
  description: "En momsberegner der udregner en pris med og uden moms",
  calculator: {
    inputs: [{ name: "Pris" }],
    calculate({ Pris }) {
      textAdd({
        name: "Pris med moms",
        ...mul(na(Pris, "Pris"), na(1.25)),
      });
      textAdd({
        name: "Pris uden moms",
        ...frac(na(Pris, "Pris"), na(1.25)),
      });
    },
  },
};

export default moms;

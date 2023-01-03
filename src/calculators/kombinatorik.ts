import { add, fac, frac, mul, na, par, pow, sub } from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

import { textAdd } from "@store/answer";

const kombinatorik: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Kombinatorik stikprøver",
  SEOtitle: "Kombinatorik beregner",
  description:
    "En kombinatorik beregner til at beregne ordnede og uordnede stikprøver med og uden tilbagelægning",
  calculator: {
    inputs: [
      {
        name: "n",
        label: "$n$ (Antallet af muligheder, som en stikprøve udtages fra)",
      },
      {
        name: "p",
        label: "$p$ (Antallet af pladser, som udvælges i stikprøven)",
      },
    ],
    calculate({ n, p }) {
      if (p < 0) {
        throw new Error("p må ikke være negativ");
      }

      if (n < p) {
        throw new Error("n skal være større end p");
      }

      textAdd({
        name: "Ordnet med tilbagelægning",
        ...pow(na(n, "n"), na(p, "p")),
      });
      textAdd({
        name: "Ordnet uden tilbagelægning",
        ...frac(fac(na(n, "n")), fac(par(sub(na(n, "n"), na(p, "p"))))),
      });
      textAdd({
        name: "Uordnet med tilbagelægning",
        ...frac(
          fac(par(add(na(n, "n"), sub(na(p, "p"), na(1))))),
          mul(fac(par(sub(na(n, "n"), na(1)))), fac(na(p, "p")))
        ),
      });
      textAdd({
        name: "Uordnet uden tilbagelægning",
        ...frac(
          fac(na(n, "n")),
          mul(fac(par(sub(na(n, "n"), na(p, "p")))), fac(na(p, "p")))
        ),
      });
    },
  },
};

export default kombinatorik;

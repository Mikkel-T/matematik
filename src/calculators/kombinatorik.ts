import { add, fac, frac, mul, par, n as pn, pow, sub } from "@utils/TeX";

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
        ...pow(pn(n, "n"), pn(p, "p")),
      });
      textAdd({
        name: "Ordnet uden tilbagelægning",
        ...frac(fac(pn(n, "n")), fac(par(sub(pn(n, "n"), pn(p, "p"))))),
      });
      textAdd({
        name: "Uordnet med tilbagelægning",
        ...frac(
          fac(par(add(pn(n, "n"), sub(pn(p, "p"), pn(1, "1"))))),
          mul(fac(par(sub(pn(n, "n"), pn(1, "1")))), fac(pn(p, "p")))
        ),
      });
      textAdd({
        name: "Uordnet uden tilbagelægning",
        ...frac(
          fac(pn(n, "n")),
          mul(fac(par(sub(pn(n, "n"), pn(p, "p")))), fac(pn(p, "p")))
        ),
      });
    },
  },
};

export default kombinatorik;

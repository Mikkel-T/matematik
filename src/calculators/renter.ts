import { add, mul, par, n as pn, pow } from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

import { equalsAdd } from "@store/answer";

const renter: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Renters rente",
  SEOtitle: "Renters rente beregner",
  description:
    "En renters rente beregner der udregner slutkapital ved hjælp af startkapital, rente og antal terminer",
  calculator: {
    inputs: [
      { name: "K", label: "$K$ (Startkapitalen)" },
      {
        name: "r",
        label: "$r$ (Renten i decimaltal. F.eks. er $3\\%$ = $0,03$)",
      },
      { name: "n", label: "$n$ (Antal terminer)" },
    ],
    calculate({ K, r, n }) {
      equalsAdd({
        name: "K_n",
        ...mul(pn(K, "K"), pow(par(add(pn(1, "1"), pn(r, "r"))), pn(n, "n"))),
      });
    },
  },
};

export default renter;

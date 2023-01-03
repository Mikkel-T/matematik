import { add, frac, mul, n, par, sqrt, sub } from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

import { addAns } from "@store/answer";

const heron: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Areal af trekant ud fra sidelængder",
  pageTitle: "Herons formel",
  SEOtitle: "Herons formel beregner",
  description:
    "En beregner der udregner arealet af en trekant ud fra dens sidelængder ved hjælp af herons formel",
  calculator: {
    inputs: [
      { name: "a", label: "$a$" },
      { name: "b", label: "$b$" },
      { name: "c", label: "$c$" },
    ],
    calculate({ a, b, c }) {
      if ((a + b + c) / 2 <= Math.max(a, b, c)) {
        throw new Error("Dette er ikke en trekant");
      }

      const s = {
        name: "s",
        ...frac(add(add(n(a, "a"), n(b, "b")), n(c, "c")), n(2, "2")),
      };
      addAns(s);

      const sn = n(s.answer, "s");
      addAns({
        name: "Areal",
        nameDisplay: "text",
        ...sqrt(
          mul(
            sn,
            mul(
              par(sub(sn, n(a, "a"))),
              mul(par(sub(sn, n(b, "b"))), par(sub(sn, n(c, "c"))))
            )
          )
        ),
      });
    },
  },
};

export default heron;

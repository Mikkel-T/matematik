import { BasicCalculatorPage } from "@interfaces/calculators";

import { factorial } from "@math/factorial";

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
        answer: n ** p,
        calculation: `${n}^{${p}}`,
        equation: "n^p",
      });
      textAdd({
        name: "Ordnet uden tilbagelægning",
        answer: factorial(n) / factorial(n - p),
        calculation: `\\frac{${n}!}{(${n} - ${p})!}`,
        equation: "\\frac{n!}{(n - p)!}",
      });
      textAdd({
        name: "Uordnet med tilbagelægning",
        answer: factorial(n + p - 1) / (factorial(n - 1) * factorial(p)),
        calculation: `\\frac{(${n} + ${p} - 1)!}{(${n} - 1)! \\cdot ${p}!}`,
        equation: "\\frac{(n + p - 1)!}{(n - 1)! \\cdot p!}",
      });
      textAdd({
        name: "Uordnet uden tilbagelægning",
        answer: factorial(n) / (factorial(n - p) * factorial(p)),
        calculation: `\\frac{${n}!}{(${n} - ${p})! \\cdot ${p}!}`,
        equation: "\\frac{n!}{(n - p)! \\cdot p!}",
      });
    },
  },
};

export default kombinatorik;

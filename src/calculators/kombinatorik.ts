import { BasicCalculatorPage } from "@interfaces/calculators";

import { factorial } from "@math/factorial";

import { add } from "@store/answer";

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
      add({
        name: "Ordnet med tilbagelægning",
        answer: n ** p,
        calculation: `${n}^{${p}}`,
        equation: "n^p",
      });
      add({
        name: "Ordnet uden tilbagelægning",
        answer: factorial(n) / factorial(n - p),
        calculation: `\\frac{${n}!}{(${n} - ${p})!}`,
        equation: "\\frac{n!}{(n - p)!}",
      });
      add({
        name: "Uordnet med tilbagelægning",
        answer: factorial(n + p - 1) / (factorial(n - 1) * factorial(p)),
        calculation: `\\frac{(${n} + ${p} - 1)!}{(${n} - 1)! \\cdot ${p}!}`,
        equation: "\\frac{(n + p - 1)!}{(n - 1)! \\cdot p!}",
      });
      add({
        name: "Uordnet uden tilbagelægning",
        answer: factorial(n) / (factorial(n - p) * factorial(p)),
        calculation: `\\frac{${n}!}{(${n} - ${p})! \\cdot ${p}!}`,
        equation: "\\frac{n!}{(n - p)! \\cdot p!}",
      });
    },
    checks: [
      { message: "p må ikke være negativ", check: ({ p }) => p < 0 },
      { message: "n skal være større end p", check: ({ n, p }) => n < p },
    ],
  },
};

export default kombinatorik;

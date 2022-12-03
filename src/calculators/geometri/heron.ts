import { BasicCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

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
    checks: [
      {
        message: "Dette er ikke en trekant",
        check: ({ a, b, c }) => {
          return (a + b + c) / 2 <= Math.max(a, b, c);
        },
      },
    ],
    calculate({ a, b, c }) {
      const s = {
        name: "s",
        answer: (a + b + c) / 2,
        calculation: `\\frac{${a} + ${b} + ${c}}{2}`,
        equation: "\\frac{a + b + c}{2}",
      };
      add(s);
      add({
        name: "Areal",
        answer: Math.sqrt(
          s.answer * (s.answer - a) * (s.answer - b) * (s.answer - c)
        ),
        calculation: `\\sqrt{${s.answer} \\cdot (${s.answer} - ${a}) \\cdot (${s.answer} - ${b}) \\cdot (${s.answer} - ${c})}`,
        equation: "\\sqrt{s \\cdot (s - a) \\cdot (s - b) \\cdot (s - c)}",
      });
    },
  },
};

export default heron;

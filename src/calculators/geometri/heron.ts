import { BasicCalculatorPage } from "@interfaces/calculators";

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
    calculations: [
      {
        name: "s",
        calc: ({ a, b, c }) => ({
          answer: (a + b + c) / 2,
          calculation: `\\frac{${a} + ${b} + ${c}}{2}`,
          equation: "\\frac{a + b + c}{2}",
        }),
      },
      {
        name: "Areal",
        calc: ({ a, b, c, s }) => ({
          answer: Math.sqrt(s * (s - a) * (s - b) * (s - c)),
          calculation: `\\sqrt{${s} \\cdot (${s} - ${a}) \\cdot (${s} - ${b}) \\cdot (${s} - ${c})}`,
          equation: "\\sqrt{s \\cdot (s - a) \\cdot (s - b) \\cdot (s - c)}",
        }),
      },
    ],
  },
};

export default heron;

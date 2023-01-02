import { BasicCalculatorPage } from "@interfaces/calculators";

import { equalsAdd, textAdd } from "@store/answer";

const funktion1Grad: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "1. gradsfunktion",
  SEOtitle: "Funktionsforskrift for en 1. gradsfunktion",
  description:
    "En 1. gradsfunktions beregner der udregner funktionsforskriften for en 1. gradsfunktion ud fra to koordinater",
  calculator: {
    inputs: [
      { name: "x1", label: "$x_1$ (x for punkt 1)", placeholder: "x₁" },
      { name: "y1", label: "$y_1$ (y for punkt 1)", placeholder: "y₁" },
      { name: "x2", label: "$x_2$ (x for punkt 2)", placeholder: "x₂" },
      { name: "y2", label: "$y_2$ (y for punkt 2)", placeholder: "y₂" },
    ],
    calculate({ x1, y1, x2, y2 }) {
      if (x1 === x2) {
        throw new Error(
          "x for punkt 1 kan ikke være det samme som x for punkt 2"
        );
      }

      const a = {
        name: "a",
        answer: (y2 - y1) / (x2 - x1),
        calculation: `\\frac{${y2} - ${y1}}{${x2} - ${x1}}`,
        equation: "\\frac{y_2 - y_1}{x_2 - x_1}",
      };

      const b = {
        name: "b",
        answer: y1 - x1 * a.answer,
        calculation: `${y1} - ${x1} \\cdot ${a.answer}`,
        equation: "y_1 - x_1 \\cdot a",
      };

      const f = {
        name: "Forskrift",
        answer: `f(x) = ${a.answer}x + ${b.answer}`,
        equation: "f(x) = ax+b",
      };

      textAdd(f);
      equalsAdd(a);
      equalsAdd(b);
    },
    text: [
      ({ x1, y1 }) => `Punkt 1: $(${x1 || 0}, ${y1 || 0})$`,
      ({ x2, y2 }) => `Punkt 2: $(${x2 || 0}, ${y2 || 0})$`,
    ],
  },
};

export default funktion1Grad;

import { coord, text } from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";

const funktion2Grad: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "2. gradsfunktion",
  SEOtitle: "2. gradsfunktion beregner",
  description:
    "En 2. gradsfunktions beregner der udregner diskriminant, toppunkt og nulpunkter for en 2. gradsfunktion",
  calculator: {
    inputs: [
      { name: "a", label: "$a$ (Tallet med et $x^2$ efter sig)" },
      { name: "b", label: "$b$ (Tallet med et $x$ efter sig)" },
      { name: "c", label: "$c$ (Tallet uden noget efter sig)" },
    ],
    calculate({ a, b, c }) {
      if (a === 0) {
        throw new Error("a må ikke være 0");
      }

      const d = {
        name: "d",
        answer: b ** 2 - 4 * a * c,
        calculation: `${b}^{2} - 4 \\cdot ${a} \\cdot ${c}`,
        equation: "b^{2} - 4 \\cdot a \\cdot c",
      };
      add(d);

      const Tp = {
        name: "Tp",
        answer: coord(-b / (2 * a), -d.answer / (4 * a)),
        calculation: `\\left(\\frac{-${b}}{2 \\cdot ${a}}, \\frac{-${d.answer}}{4 \\cdot ${a}} \\right)`,
        equation:
          "\\left(\\frac{-b}{2 \\cdot a}, \\frac{-d}{4 \\cdot a} \\right)",
      };
      add(Tp);

      if (d.answer < 0) {
        add({
          answer: text("Der er ikke nogen nulpunkter da d er under 0"),
          name: "Np",
        });
      } else if (d.answer === 0) {
        add({
          name: "Np",
          answer: coord(-b / (2 * a), 0),
          calculation: `\\left(\\frac{-${b}}{2 \\cdot ${a}}, 0 \\right)`,
          equation: "\\left(\\frac{-b}{2 \\cdot a}, 0 \\right)",
        });
      } else {
        add({
          name: "Np",
          answer: `${coord(
            (-b + Math.sqrt(d.answer)) / (2 * a),
            0
          )} ~\\&~ ${coord((-b - Math.sqrt(d.answer)) / (2 * a), 0)}`,
        });
        add({
          name: "Np_1",
          calculation: `\\left(\\frac{-${b} + \\sqrt{${d.answer}}}{2 \\cdot ${a}}, 0 \\right)`,
          equation: "\\left(\\frac{-b + \\sqrt{d}}{2 \\cdot a}, 0 \\right)",
        });
        add({
          name: "Np_2",
          calculation: `\\left(\\frac{-${b} - \\sqrt{${d.answer}}}{2 \\cdot ${a}}, 0 \\right)`,
          equation: "\\left(\\frac{-b - \\sqrt{d}}{2 \\cdot a}, 0 \\right)",
        });
      }
    },
  },
};

export default funktion2Grad;

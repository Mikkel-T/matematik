import { coord, text } from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

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
    checks: [{ message: "a må ikke være 0", check: ({ a }) => a === 0 }],
    calculations: [
      {
        name: "d",
        calc: ({ a, b, c }) => ({
          answer: b ** 2 - 4 * a * c,
          calculation: `${b}^{2} - 4 \\cdot ${a} \\cdot ${c}`,
          equation: "b^{2} - 4 \\cdot a \\cdot c",
        }),
      },
      {
        name: "Tp",
        calc: ({ a, b, d }) => ({
          answer: coord(-b / (2 * a), -d / (4 * a)),
          calculation: `\\left(\\frac{-${b}}{2 \\cdot ${a}}, \\frac{-${d}}{4 \\cdot ${a}} \\right)`,
          equation:
            "\\left(\\frac{-b}{2 \\cdot a}, \\frac{-d}{4 \\cdot a} \\right)",
        }),
      },
      {
        name: "Np_1",
        calc: ({ a, b, d }) => {
          if (d > 0) {
            return {
              calculation: `\\left(\\frac{-${b}} + \\sqrt{${d}}}{2 \\cdot ${a}}, 0 \\right)`,
              equation: "\\left(\\frac{-b + \\sqrt{d}}{2 \\cdot a}, 0 \\right)",
            };
          } else {
            return {};
          }
        },
      },
      {
        name: "Np_2",
        calc: ({ a, b, d }) => {
          if (d > 0) {
            return {
              calculation: `\\left(\\frac{-${b}} - \\sqrt{${d}}}{2 \\cdot ${a}}, 0 \\right)`,
              equation: "\\left(\\frac{-b - \\sqrt{d}}{2 \\cdot a}, 0 \\right)",
            };
          } else {
            return {};
          }
        },
      },
      {
        name: "Np",
        calc: ({ a, b, d }) => {
          if (d < 0) {
            return {
              answer: text("Der er ikke nogle nulpunkter da d er under 0"),
            };
          } else if (d === 0) {
            return {
              answer: coord(-b / (2 * a), 0),
              calculation: `\\left(\\frac{-${b}}{2 \\cdot ${a}}, 0 \\right)`,
              equation: "\\left(\\frac{-b}{2 \\cdot a}, 0 \\right)",
            };
          } else {
            return {
              answer: `${coord((-b + Math.sqrt(d)) / (2 * a), 0)}~ \\&~ ${coord(
                (-b - Math.sqrt(d)) / (2 * a),
                0
              )}`,
            };
          }
        },
      },
    ],
  },
};

export default funktion2Grad;

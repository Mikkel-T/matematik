import CirkelComponent from "@components/Calculators/Custom/Cirkel.svelte";

import { text } from "@utils/TeX";

import { ShapeCalculatorPage } from "@interfaces/calculators";

import { add } from "@store/answer";
import { answer } from "@store/shape";

const cirkel: ShapeCalculatorPage = {
  type: "shape_calculator",
  title: "Cirkler",
  SEOtitle: "Cirkel beregner",
  pageTitle: "Cirkel beregner",
  description:
    "En cirkelberegner der udregner radius, diameter, areal og omkreds af en cirkel",
  calculator: {
    component: CirkelComponent,
    calculate(vals) {
      const key = Object.entries(vals).filter((i) => i[1])[0][0];
      if (key) {
        answer.setKey(key, vals[key]);
        add({
          name: key,
          calculation: text(`${vals[key]} blev indtastet`),
          equation: text(`${key} blev indtastet`),
        });

        if (key === "Radius") {
          answer.setKey("Diameter", vals[key] * 2);
          add({
            name: "Diameter",
            calculation: `${vals[key]} \\cdot 2`,
            equation: "Radius \\cdot 2",
          });

          answer.setKey("Omkreds", vals[key] * 2 * Math.PI);
          add({
            name: "Omkreds",
            calculation: `${vals[key]} \\cdot 2 \\cdot \\pi`,
            equation: "Radius \\cdot 2 \\cdot \\pi",
          });

          answer.setKey("Areal", vals[key] ** 2 * Math.PI);
          add({
            name: "Areal",
            calculation: `${vals[key]}^{2} \\cdot \\pi`,
            equation: "Radius^{2} \\cdot \\pi",
          });
        }

        if (key === "Diameter") {
          answer.setKey("Radius", vals[key] / 2);
          add({
            name: "Radius",
            calculation: `\\frac{${vals[key]}}{2}`,
            equation: "\\frac{Diameter}{2}",
          });

          answer.setKey("Omkreds", vals[key] * Math.PI);
          add({
            name: "Omkreds",
            calculation: `${vals[key]} \\cdot \\pi`,
            equation: "Diameter \\cdot \\pi",
          });

          answer.setKey("Areal", (vals[key] / 2) ** 2 * Math.PI);
          add({
            name: "Areal",
            calculation: `\\left(\\frac{${vals[key]}}{2}\\right)^{2} \\cdot \\pi`,
            equation: "\\left(\\frac{Diameter}{2}\\right)^{2} \\cdot \\pi",
          });
        }

        if (key === "Omkreds") {
          answer.setKey("Radius", vals[key] / (2 * Math.PI));
          add({
            name: "Radius",
            calculation: `\\frac{${vals[key]}}{2 \\cdot \\pi}`,
            equation: "\\frac{Omkreds}{2 \\cdot \\pi}",
          });

          answer.setKey("Diameter", vals[key] / Math.PI);
          add({
            name: "Diameter",
            calculation: `\\frac{${vals[key]}}{\\pi}`,
            equation: "\\frac{Omkreds}{\\pi}",
          });

          answer.setKey("Areal", vals[key] ** 2 / (4 * Math.PI));
          add({
            name: "Areal",
            calculation: `\\frac{${vals[key]}^{2}}{4 \\cdot \\pi}`,
            equation: "\\frac{Omkreds^{2}}{4 \\cdot \\pi}",
          });
        }

        if (key === "Areal") {
          answer.setKey("Radius", Math.sqrt(vals[key] / Math.PI));
          add({
            name: "Radius",
            calculation: `\\sqrt{\\frac{${vals[key]}}{\\pi}}`,
            equation: "\\sqrt{\\frac{Areal}{\\pi}}",
          });

          answer.setKey("Diameter", Math.sqrt(vals[key] / Math.PI) * 2);
          add({
            name: "Diameter",
            calculation: `\\sqrt{\\frac{${vals[key]}}{\\pi}} \\cdot 2`,
            equation: "\\sqrt{\\frac{Areal}{\\pi}} \\cdot 2",
          });

          answer.setKey(
            "Omkreds",
            Math.sqrt(vals[key] / Math.PI) * 2 * Math.PI
          );
          add({
            name: "Omkreds",
            calculation: `\\sqrt{\\frac{${vals[key]}}{\\pi}} \\cdot 2 \\cdot \\pi`,
            equation: "\\sqrt{\\frac{Areal}{\\pi}} \\cdot 2 \\cdot \\pi",
          });
        }
      }
    },
  },
};

export default cirkel;

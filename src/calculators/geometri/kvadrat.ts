import KvadratComponent from "@components/Calculators/Custom/Kvadrat.svelte";

import { text } from "@utils/TeX";

import { ShapeCalculatorPage } from "@interfaces/calculators";

import { textAdd } from "@store/answer";
import { answer } from "@store/shape";

const kvadrat: ShapeCalculatorPage = {
  type: "shape_calculator",
  title: "Kvadrater",
  SEOtitle: "Kvadrat beregner",
  pageTitle: "Kvadrat beregner",
  description:
    "En kvadratberegner der udregner sidelængde, diagonallængde, areal og omkreds af et kvadrat",
  calculator: {
    component: KvadratComponent,
    calculate(vals) {
      const key = Object.entries(vals).filter((i) => i[1])[0][0];
      if (key) {
        answer.setKey(key, vals[key]);
        textAdd({
          name: key,
          calculation: text(`${vals[key]} blev indtastet`),
          equation: text(`${key} blev indtastet`),
        });

        let sideTmp;
        if (key === "Side") {
          sideTmp = {
            answer: vals.Side,
            calculation: vals.Side,
            equation: "Side",
          };
        }
        if (key === "Diagonal") {
          sideTmp = {
            answer: vals.Diagonal / Math.sqrt(2),
            calculation: `\\frac{${vals.Diagonal}}{\\sqrt{2}}`,
            equation: "\\frac{Diagonal}{\\sqrt{2}}",
          };
        }
        if (key === "Omkreds") {
          sideTmp = {
            answer: vals.Omkreds / 4,
            calculation: `\\frac{${vals.Omkreds}}{4}`,
            equation: "\\frac{Omkreds}{4}",
          };
        }
        if (key === "Areal") {
          sideTmp = {
            answer: Math.sqrt(vals.Areal),
            calculation: `\\sqrt{${vals.Areal}}`,
            equation: "\\sqrt{Areal}",
          };
        }

        if (key !== "Side") {
          answer.setKey("Side", sideTmp.answer);
          textAdd({
            name: "Side",
            calculation: sideTmp.calculation,
            equation: sideTmp.equation,
          });
        }
        if (key !== "Diagonal") {
          answer.setKey("Diagonal", sideTmp.answer * Math.sqrt(2));
          textAdd({
            name: "Diagonal",
            calculation: `${sideTmp.calculation} \\cdot \\sqrt{2}`,
            equation: `${sideTmp.equation} \\cdot \\sqrt{2}`,
          });
        }
        if (key !== "Omkreds") {
          answer.setKey("Omkreds", sideTmp.answer * 4);
          textAdd({
            name: "Omkreds",
            calculation: `${sideTmp.calculation} \\cdot 4`,
            equation: `${sideTmp.equation} \\cdot 4`,
          });
        }
        if (key !== "Areal") {
          answer.setKey("Areal", sideTmp.answer ** 2);
          textAdd({
            name: "Areal",
            calculation: `${sideTmp.calculation}^{2}`,
            equation: `${sideTmp.equation}^{2}`,
          });
        }
      }
    },
  },
};

export default kvadrat;

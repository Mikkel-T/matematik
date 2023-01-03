import TrigonometriComponent from "@components/Calculators/Custom/Trigonometri/Retvinklet.svelte";

import { text } from "@utils/TeX";
import {
  angleCalc,
  fracCalc,
  inverseFrac,
  multiplyCalc,
  sqrtCalc,
} from "@utils/trig";

import { ShapeCalculatorPage } from "@interfaces/calculators";

import { addAns, sort } from "@store/answer";
import { answer, getAnswer } from "@store/shape";

const trigonometriRetvinklet: ShapeCalculatorPage = {
  type: "shape_calculator",
  title: "Trigonometri i retvinklede trekanter",
  description:
    "En trigonometri beregner der udregner alle sider og vinkler i en retvinklet trekant ved hjælp af trigonometri og pythagoras",
  calculator: {
    component: TrigonometriComponent,
    calculate(vals) {
      const { A, B, a, b, c } = vals;

      if ((A && A >= 90) || (B && B >= 90)) {
        throw new Error(
          "Vinklerne (A eller B) må ikke være større end eller lig med 90°"
        );
      }

      if ((a && c && c <= a) || (b && c && c <= b)) {
        throw new Error(
          "Kateterne (a eller b) må ikke være større end eller lig med hypotenusen (c)"
        );
      }

      const keys = Object.entries(vals)
        .filter((i) => i[1])
        .map((i) => i[0]);

      for (const key of keys) {
        answer.setKey(key, vals[key]);
        addAns({
          name: key,
          calculation: text(`${vals[key]} blev indtastet`),
          equation: text(`${key} blev indtastet`),
        });
      }

      if (a && b) {
        inverseFrac({ key: "A", func: "tan", top: "a", bottom: "b", vals });
        inverseFrac({ key: "B", func: "tan", top: "b", bottom: "a", vals });
        sqrtCalc({ key: "c", first: "a", operator: "+", second: "b", vals });
      } else if (a && c) {
        inverseFrac({ key: "A", func: "sin", top: "a", bottom: "c", vals });
        inverseFrac({ key: "B", func: "cos", top: "a", bottom: "c", vals });
        sqrtCalc({ key: "b", first: "c", operator: "-", second: "a", vals });
      } else if (a && A) {
        angleCalc({ key: "B", angle: "A", vals });
        fracCalc({ key: "b", func: "tan", top: "a", bottom: "A", vals });
        fracCalc({ key: "c", func: "sin", top: "a", bottom: "A", vals });
      } else if (a && B) {
        angleCalc({ key: "A", angle: "B", vals });
        multiplyCalc({ key: "b", first: "a", func: "tan", second: "B", vals });
        fracCalc({ key: "c", func: "cos", top: "a", bottom: "B", vals });
      } else if (b && c) {
        inverseFrac({ key: "A", func: "cos", top: "b", bottom: "c", vals });
        inverseFrac({ key: "B", func: "sin", top: "b", bottom: "c", vals });
        sqrtCalc({ key: "a", first: "c", operator: "-", second: "b", vals });
      } else if (b && A) {
        angleCalc({ key: "B", angle: "A", vals });
        multiplyCalc({ key: "a", first: "b", func: "tan", second: "A", vals });
        fracCalc({ key: "c", func: "cos", top: "b", bottom: "A", vals });
      } else if (b && B) {
        angleCalc({ key: "A", angle: "B", vals });
        fracCalc({ key: "a", func: "tan", top: "b", bottom: "B", vals });
        fracCalc({ key: "c", func: "sin", top: "b", bottom: "B", vals });
      } else if (c && A) {
        angleCalc({ key: "B", angle: "A", vals });
        multiplyCalc({ key: "a", first: "c", func: "sin", second: "A", vals });
        multiplyCalc({ key: "b", first: "c", func: "cos", second: "A", vals });
      } else if (c && B) {
        angleCalc({ key: "A", angle: "B", vals });
        multiplyCalc({ key: "a", first: "c", func: "cos", second: "B", vals });
        multiplyCalc({ key: "b", first: "c", func: "sin", second: "B", vals });
      }

      addAns({
        name: "C",
        nameDisplay: "hide",
        calculation: "C" + text(" er altid ") + "90^{\\circ}",
      });
      sort();

      answer.setKey("Areal", 0.5 * getAnswer("a") * getAnswer("b"));
      addAns({
        name: text("Areal"),
        calculation: `\\frac{1}{2} \\cdot ${getAnswer("a")} \\cdot ${getAnswer(
          "b"
        )}`,
        equation: "\\frac{1}{2} \\cdot a \\cdot b",
      });
    },
  },
};

export default trigonometriRetvinklet;

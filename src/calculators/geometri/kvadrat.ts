import KvadratComponent from "@components/Calculators/Custom/Kvadrat.svelte";

import { frac, mul, n, pow, sqrt, text } from "@utils/TeX";

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

        let s;
        if (key === "Side") {
          s = n(vals.Side, "Side");
        }
        if (key === "Diagonal") {
          s = frac(n(vals.Diagonal, "Diagonal"), sqrt(n(2, "2")));
        }
        if (key === "Omkreds") {
          s = frac(n(vals.Omkreds, "Omkreds"), n(4, "4"));
        }
        if (key === "Areal") {
          s = sqrt(n(vals.Areal, "Areal"));
        }

        if (key !== "Side") {
          const { answer: a, calculation, equation } = s;
          answer.setKey("Side", a);
          textAdd({ name: "Side", calculation, equation });
        }
        if (key !== "Diagonal") {
          const { answer: a, calculation, equation } = mul(s, sqrt(n(2, "2")));
          answer.setKey("Diagonal", a);
          textAdd({ name: "Diagonal", calculation, equation });
        }
        if (key !== "Omkreds") {
          const { answer: a, calculation, equation } = mul(s, n(4, "4"));
          answer.setKey("Omkreds", a);
          textAdd({ name: "Omkreds", calculation, equation });
        }
        if (key !== "Areal") {
          const { answer: a, calculation, equation } = pow(s, n(2, "2"));
          answer.setKey("Areal", a);
          textAdd({ name: "Areal", calculation, equation });
        }
      }
    },
  },
};

export default kvadrat;

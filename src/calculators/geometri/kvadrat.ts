import KvadratComponent from "@components/Calculators/Custom/Kvadrat.svelte";

import { frac, mul, n, pow, sqrt, text } from "@utils/TeX";

import { ShapeCalculatorPage } from "@interfaces/calculators";

import { shapeTextAdd } from "@store/shape";

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
        shapeTextAdd({
          name: key,
          answer: vals[key],
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
          shapeTextAdd({ name: "Side", ...s });
        }
        if (key !== "Diagonal") {
          shapeTextAdd({ name: "Diagonal", ...mul(s, sqrt(n(2, "2"))) });
        }
        if (key !== "Omkreds") {
          shapeTextAdd({ name: "Omkreds", ...mul(s, n(4, "4")) });
        }
        if (key !== "Areal") {
          shapeTextAdd({ name: "Areal", ...pow(s, n(2, "2")) });
        }
      }
    },
  },
};

export default kvadrat;

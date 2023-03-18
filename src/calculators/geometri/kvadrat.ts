import KvadratComponent from "@components/Calculators/Custom/Kvadrat.svelte";

import { frac, mul, na, pow, sqrt, text } from "@utils/TeX";
import ShapeCalculatorPage from "@utils/pages/ShapeCalculatorPage";

import { shapeTextAdd } from "@store/shape";

export default new ShapeCalculatorPage({
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
        });

        let s;
        if (key === "Side") {
          s = na(vals.Side, "Side");
        }
        if (key === "Diagonal") {
          s = frac(na(vals.Diagonal, "Diagonal"), sqrt(na(2)));
        }
        if (key === "Omkreds") {
          s = frac(na(vals.Omkreds, "Omkreds"), na(4));
        }
        if (key === "Areal") {
          s = sqrt(na(vals.Areal, "Areal"));
        }

        if (key !== "Side") {
          shapeTextAdd({ name: "Side", ...s });
        }
        if (key !== "Diagonal") {
          shapeTextAdd({ name: "Diagonal", ...mul(s, sqrt(na(2))) });
        }
        if (key !== "Omkreds") {
          shapeTextAdd({ name: "Omkreds", ...mul(s, na(4)) });
        }
        if (key !== "Areal") {
          shapeTextAdd({ name: "Areal", ...pow(s, na(2)) });
        }
      }
    },
  },
});

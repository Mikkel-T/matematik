import CirkelComponent from "@components/Calculators/Custom/Cirkel.svelte";

import { bpar, frac, mul, na, pi, pow, sqrt, text } from "@utils/TeX";

import { ShapeCalculatorPage } from "@interfaces/calculators";

import { shapeTextAdd } from "@store/shape";

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
        shapeTextAdd({
          name: key,
          answer: vals[key],
          calculation: text(`${vals[key]} blev indtastet`),
        });

        if (key === "Radius") {
          const r = na(vals[key], "Radius");
          shapeTextAdd({ name: "Diameter", ...mul(r, na(2)) });
          shapeTextAdd({ name: "Omkreds", ...mul(r, mul(na(2), pi())) });
          shapeTextAdd({ name: "Areal", ...mul(pow(r, na(2)), pi()) });
        }

        if (key === "Diameter") {
          const d = na(vals[key], "Diameter");
          shapeTextAdd({ name: "Radius", ...frac(d, na(2)) });
          shapeTextAdd({ name: "Omkreds", ...mul(d, pi()) });
          shapeTextAdd({
            name: "Areal",
            ...mul(pow(bpar(frac(d, na(2))), na(2)), pi()),
          });
        }

        if (key === "Omkreds") {
          const o = na(vals[key], "Omkreds");
          shapeTextAdd({ name: "Radius", ...frac(o, mul(na(2), pi())) });
          shapeTextAdd({ name: "Diameter", ...frac(o, pi()) });
          shapeTextAdd({
            name: "Areal",
            ...frac(pow(o, na(2)), mul(na(4), pi())),
          });
        }

        if (key === "Areal") {
          const a = na(vals[key], "Areal");
          const r = sqrt(frac(a, pi()));
          shapeTextAdd({ name: "Radius", ...r });
          shapeTextAdd({ name: "Diameter", ...mul(r, na(2)) });
          shapeTextAdd({ name: "Omkreds", ...mul(r, mul(na(2), pi())) });
        }
      }
    },
  },
};

export default cirkel;

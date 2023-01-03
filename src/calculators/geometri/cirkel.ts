import CirkelComponent from "@components/Calculators/Custom/Cirkel.svelte";

import { bpar, frac, mul, n, pi, pow, sqrt, text } from "@utils/TeX";

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

        const n2 = n(2, "2");

        if (key === "Radius") {
          const r = n(vals[key], "Radius");
          shapeTextAdd({ name: "Diameter", ...mul(r, n2) });
          shapeTextAdd({ name: "Omkreds", ...mul(r, mul(n2, pi())) });
          shapeTextAdd({ name: "Areal", ...mul(pow(r, n2), pi()) });
        }

        if (key === "Diameter") {
          const d = n(vals[key], "Diameter");
          shapeTextAdd({ name: "Radius", ...frac(d, n2) });
          shapeTextAdd({ name: "Omkreds", ...mul(d, pi()) });
          shapeTextAdd({
            name: "Areal",
            ...mul(pow(bpar(frac(d, n2)), n2), pi()),
          });
        }

        if (key === "Omkreds") {
          const o = n(vals[key], "Omkreds");
          shapeTextAdd({ name: "Radius", ...frac(o, mul(n2, pi())) });
          shapeTextAdd({ name: "Diameter", ...frac(o, pi()) });
          shapeTextAdd({
            name: "Areal",
            ...frac(pow(o, n2), mul(n(4, "4"), pi())),
          });
        }

        if (key === "Areal") {
          const a = n(vals[key], "Areal");
          const r = sqrt(frac(a, pi()));
          shapeTextAdd({ name: "Radius", ...r });
          shapeTextAdd({ name: "Diameter", ...mul(r, n2) });
          shapeTextAdd({ name: "Omkreds", ...mul(r, mul(n2, pi())) });
        }
      }
    },
  },
};

export default cirkel;

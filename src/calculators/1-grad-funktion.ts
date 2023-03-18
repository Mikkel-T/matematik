import { frac, mul, na, sub } from "@utils/TeX";
import { round } from "@utils/number";
import BasicCalculatorPage from "@utils/pages/BasicCalculatorPage";

import { equalsAdd, textAdd } from "@store/answer";

export default new BasicCalculatorPage({
  title: "1. gradsfunktion",
  SEOtitle: "Funktionsforskrift for en 1. gradsfunktion",
  description:
    "En 1. gradsfunktions beregner der udregner funktionsforskriften for en 1. gradsfunktion ud fra to koordinater",
  calculator: {
    inputs: [
      { name: "x1", label: "$x_1$ (x for punkt 1)", placeholder: "x₁" },
      { name: "y1", label: "$y_1$ (y for punkt 1)", placeholder: "y₁" },
      { name: "x2", label: "$x_2$ (x for punkt 2)", placeholder: "x₂" },
      { name: "y2", label: "$y_2$ (y for punkt 2)", placeholder: "y₂" },
    ],
    calculate({ x1, y1, x2, y2 }) {
      if (x1 === x2) {
        throw new Error(
          "x for punkt 1 kan ikke være det samme som x for punkt 2"
        );
      }

      const a = {
        name: "a",
        ...frac(
          sub(na(y2, "y_2"), na(y1, "y_1")),
          sub(na(x2, "x_2"), na(x1, "x_1"))
        ),
      };

      a.answer = round(a.answer);

      const b = {
        name: "b",
        ...sub(na(y1, "y_1"), mul(na(x1, "x_1"), na(a.answer, "a"))),
      };

      b.answer = round(b.answer);

      let fa;
      let fb;

      if (a.answer == 0) {
        fa = "";
      } else if (Math.abs(+a.answer) == 1) {
        fa = `${+a.answer < 0 ? "-" : ""}x`;
      } else {
        fa = `${a.answer}x`;
      }

      if (b.answer != 0) {
        if (fa) {
          fb = ` ${+b.answer > 0 ? "+" : "-"}${Math.abs(+b.answer)}`;
        } else {
          fb = b.answer;
        }
      } else {
        fb = fa ? "" : 0;
      }

      const f = {
        name: "Forskrift",
        answer: `f(x) = ${fa}${fb}`,
        equation: "f(x) = ax+b",
      };

      textAdd(f);
      equalsAdd(a);
      equalsAdd(b);
    },
    text: [
      ({ x1, y1 }) => `Punkt 1: $(${x1 || 0}, ${y1 || 0})$`,
      ({ x2, y2 }) => `Punkt 2: $(${x2 || 0}, ${y2 || 0})$`,
    ],
  },
});

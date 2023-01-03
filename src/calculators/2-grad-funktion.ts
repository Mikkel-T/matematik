import {
  add,
  coord,
  frac,
  mul,
  na,
  neg,
  pow,
  sqrt,
  sub,
  text,
} from "@utils/TeX";

import { BasicCalculatorPage } from "@interfaces/calculators";

import { addAns } from "@store/answer";

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
    calculate({ a, b, c }) {
      if (a === 0) {
        throw new Error("a må ikke være 0");
      }

      const d = {
        name: "d",
        ...sub(pow(na(b, "b"), na(2)), mul(na(4), mul(na(a, "a"), na(c, "c")))),
      };
      addAns(d);

      addAns({
        name: "Tp",
        ...coord(
          frac(neg(na(b, "b")), mul(na(2), na(a, "a"))),
          frac(neg(na(d.answer, "d")), mul(na(4), na(a, "a")))
        ),
      });

      if (d.answer < 0) {
        addAns({
          answer: text("Der er ikke nogen nulpunkter da d er under 0"),
          name: "Np",
        });
      } else if (d.answer === 0) {
        addAns({
          name: "Np",
          ...coord(frac(neg(na(b, "b")), mul(na(2), na(a, "a"))), na(0)),
        });
      } else {
        const Np1 = coord(
          frac(
            add(neg(na(b, "b")), sqrt(na(d.answer, "d"))),
            mul(na(2), na(a, "a"))
          ),
          na(0)
        );
        const Np2 = coord(
          frac(
            sub(neg(na(b, "b")), sqrt(na(d.answer, "d"))),
            mul(na(2), na(a, "a"))
          ),
          na(0)
        );

        addAns({ name: "Np", answer: `${Np1.answer} ~\\&~ ${Np2.answer}` });
        addAns({ name: "Np_1", ...Np1, answer: undefined });
        addAns({ name: "Np_2", ...Np2, answer: undefined });
      }
    },
  },
};

export default funktion2Grad;

<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/BasicInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import {
    frac,
    mul,
    na,
    sub,
    pow,
    coord,
    neg,
    text,
    add,
    sqrt,
  } from "@math/calculation";

  function calculate() {
    let { a, b, c } = calculator.opValues;
    if (a.answer == 0) {
      throw new Error("$a$ kan ikke være $0$");
    }

    const d = new Answer("d", sub(pow(b, na(2)), mul(na(4), mul(a, c))));

    answer.add(
      d,
      new Answer(
        "Tp",
        coord(
          frac(neg(b), mul(na(2), a)),
          frac(neg(d.getNewOp), mul(na(4), a)),
        ),
      ),
    );

    if (d.getAns < 0) {
      answer.add(
        new Answer("Np", {
          answer: text("Der er ikke nogen nulpunkter da d er under 0"),
        }),
      );
    } else if (d.getAns === 0) {
      answer.add(new Answer("Np", coord(frac(neg(b), mul(na(2), a)), na(0))));
    } else {
      const np1 = new Answer(
        "Np_1",
        coord(frac(add(neg(b), sqrt(d.getNewOp)), mul(na(2), a)), na(0)),
      );
      const np2 = new Answer(
        "Np_2",
        coord(frac(sub(neg(b), sqrt(d.getNewOp)), mul(na(2), a)), na(0)),
      );
      const np = new Answer("Np", {
        answer: `${np1.answer} ~\\vee~ ${np2.answer}`,
      });

      answer.add(np, np1, np2);
    }
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "a", label: "$a$ (Tallet med et $x^2$ efter sig)" },
      { name: "b", label: "$b$ (Tallet med et $x$ efter sig)" },
      { name: "c", label: "$c$ (Tallet uden noget efter sig)" },
    ]}
  />
  <div class="text-center"></div>
</Calculator>

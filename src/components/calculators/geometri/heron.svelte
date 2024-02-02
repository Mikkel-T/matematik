<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/BasicInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, frac, mul, na, par, sqrt, sub } from "@math/calculation";

  function calculate() {
    let { a, b, c } = calculator.opValues;
    if (
      (a.answer + b.answer + c.answer) / 2 <=
      Math.max(a.answer, b.answer, c.answer)
    ) {
      throw new Error("Dette er ikke en trekant");
    }

    const s = new Answer("s", frac(add(add(a, b), c), na(2)));
    const area = new Answer(
      "T",
      sqrt(
        mul(
          mul(
            mul(s.getNewOp, par(sub(s.getNewOp, a))),
            par(sub(s.getNewOp, b)),
          ),
          par(sub(s.getNewOp, c)),
        ),
      ),
    );

    answer.add(s, area);
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "a", label: "$a$" },
      { name: "b", label: "$b$" },
      { name: "c", label: "$c$" },
    ]}
  />
</Calculator>

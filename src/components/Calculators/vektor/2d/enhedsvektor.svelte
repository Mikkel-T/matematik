<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { frac, na, numMulVec, pmat, vecLen } from "@math/calculation";

  function calculate() {
    let { a_1, a_2 } = calculator.opValues;
    answer.add(
      new Answer(
        "\\vec{e_a}",
        numMulVec(frac(na(1), vecLen({ x: a_1, y: a_2, name: "a" })), {
          x: a_1,
          y: a_2,
          name: "a",
        }),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs inputs={[{ name: "a", type: "vec2d" }]} />
</Calculator>

<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { pmat, sub } from "@math/calculation";

  function calculate() {
    let { A_1, A_2, B_1, B_2 } = calculator.opValues;
    answer.add(new Answer("\\vec{AB}", pmat(sub(B_1, A_1), sub(B_2, A_2))));
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "A", type: "coord2d" },
      { name: "B", type: "coord2d" },
    ]}
  />
</Calculator>

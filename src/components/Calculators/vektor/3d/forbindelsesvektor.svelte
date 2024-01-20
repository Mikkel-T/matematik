<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { pmat, sub } from "@math/calculation";

  function calculate() {
    let { A_1, A_2, A_3, B_1, B_2, B_3 } = calculator.opValues;
    answer.add(
      new Answer(
        "\\vec{AB}",
        pmat(sub(B_1, A_1), sub(B_2, A_2), sub(B_3, A_3)),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "A", type: "coord3d" },
      { name: "B", type: "coord3d" },
    ]}
  />
</Calculator>

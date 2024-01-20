<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { mul, pmat } from "@math/calculation";

  function calculate() {
    let { a_1, a_2, a_3, k } = calculator.opValues;
    answer.add(
      new Answer(
        "k \\cdot \\vec{a}",
        pmat(mul(k, a_1), mul(k, a_2), mul(k, a_3)),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "k", type: "number" },
      { name: "a", type: "vec3d" },
    ]}
  />
</Calculator>

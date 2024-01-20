<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, mul } from "@math/calculation";

  function calculate() {
    let { a_1, a_2, a_3, b_1, b_2, b_3 } = calculator.opValues;
    answer.add(
      new Answer(
        "\\vec{a} \\bullet \\vec{b}",
        add(mul(a_1, b_1), add(mul(a_2, b_2), mul(a_3, b_3))),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "a", type: "vec3d" },
      { name: "b", type: "vec3d" },
    ]}
  />
</Calculator>

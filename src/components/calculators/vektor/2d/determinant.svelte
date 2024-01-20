<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { mul, sub } from "@math/calculation";

  function calculate() {
    let { a_1, a_2, b_1, b_2 } = calculator.opValues;
    answer.add(
      new Answer(
        "\\det(\\vec{a} , \\vec{b})",
        sub(mul(a_1, b_2), mul(a_2, b_1)),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "a", type: "vec2d" },
      { name: "b", type: "vec2d" },
    ]}
  />
</Calculator>

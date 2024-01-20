<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { neg, pmat } from "@math/calculation";

  function calculate() {
    let { a_1, a_2, a_3 } = calculator.opValues;
    answer.add(new Answer("|\\vec{a}|", pmat(neg(a_1), neg(a_2), neg(a_3))));
  }
</script>

<Calculator {calculate}>
  <Inputs inputs={[{ name: "a", type: "vec3d" }]} />
</Calculator>

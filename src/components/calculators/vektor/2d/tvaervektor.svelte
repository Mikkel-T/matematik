<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { na, neg, omitCalc, pmat } from "@math/calculation";

  function calculate() {
    let { a_1, a_2 } = calculator.opValues;
    answer.add(new Answer("\\hat{a}", omitCalc(pmat(neg(a_2), a_1))));
  }
</script>

<Calculator {calculate}>
  <Inputs inputs={[{ name: "a", type: "vec2d" }]} />
</Calculator>

<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/BasicInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { frac, mul, na } from "@math/calculation";

  function calculate() {
    let { Pris } = calculator.opValues;
    answer.add(
      new Answer("Pris med moms", mul(Pris, na(1.25)), "text"),
      new Answer("Pris uden moms", frac(Pris, na(1.25)), "text"),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs inputs={[{ name: "Pris" }]} />
</Calculator>

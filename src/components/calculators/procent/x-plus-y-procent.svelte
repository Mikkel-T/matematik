<script lang="ts">
  import I from "@components/calculatorutils/inputs/PercentInput.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, frac, mul, na, par } from "@math/calculation";

  function calculate() {
    let { x, y } = calculator.opValues;
    answer.add(
      new Answer("Svar", mul(x, par(add(na(1), frac(y, na(100))))), "hide"),
    );
  }
</script>

<Calculator {calculate}>
  Hvad er <I name="x" /> plus <I name="y" /> procent
</Calculator>

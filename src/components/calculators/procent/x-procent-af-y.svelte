<script lang="ts">
  import I from "@components/calculatorutils/inputs/PercentInput.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { frac, mul, na } from "@math/calculation";

  function calculate() {
    let { x, y } = calculator.opValues;
    answer.add(new Answer("Svar", frac(mul(y, x), na(100)), "hide"));
  }
</script>

<Calculator {calculate}>
  Hvad er <I name="x" /> procent af <I name="y" />.
</Calculator>

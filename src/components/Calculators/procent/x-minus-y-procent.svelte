<script lang="ts">
  import I from "@components/calculatorutils/inputs/PercentInput.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { frac, mul, na, par, sub } from "@math/calculation";

  function calculate() {
    let { x, y } = calculator.opValues;
    answer.add(
      new Answer("Svar", mul(x, par(sub(na(1), frac(y, na(100))))), "hide"),
    );
  }
</script>

<Calculator {calculate}>
  Hvad er <I name="x" /> procent af <I name="y" />
</Calculator>

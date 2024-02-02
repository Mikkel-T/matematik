<script lang="ts">
  import I from "@components/calculatorutils/inputs/PercentInput.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { frac, mul, na, pct } from "@math/calculation";

  function calculate() {
    let { x, y } = calculator.opValues;
    answer.add(new Answer("Svar", mul(frac(y, pct(x)), pct(na(100))), "hide"));
  }
</script>

<Calculator {calculate}>
  Beregn hele tallet når <I name="x" /> procent er <I name="y" />
</Calculator>

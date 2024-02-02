<script lang="ts">
  import I from "@components/calculatorutils/inputs/PercentInput.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { ansPct, frac, mul, na, pct } from "@math/calculation";

  function calculate() {
    let { x, y } = calculator.opValues;
    answer.add(
      new Answer("Svar", ansPct(mul(frac(x, y), pct(na(100)))), "hide"),
    );
  }
</script>

<Calculator {calculate}>
  Hvor mange procent er <I name="x" /> af <I name="y" />
</Calculator>

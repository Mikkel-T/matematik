<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/BasicInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, mul, na, par, pow } from "@math/calculation";

  function calculate() {
    let { K_0, r, n } = calculator.opValues;
    answer.add(new Answer("K_n", mul(K_0, pow(par(add(na(1), r)), n))));
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "K_0", label: "$K_0$ (Startkapitalen)", placeholder: "K₀" },
      {
        name: "r",
        label: "$r$ (Renten i decimaltal. F.eks. er $5\\%$ = $0,05$)",
      },
      { name: "n", label: "$n$ (Antal terminer)" },
    ]}
  />
</Calculator>

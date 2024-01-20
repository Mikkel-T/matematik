<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { omitCalc, pmat } from "@math/calculation";

  function calculate() {
    let { P_1, P_2, P_3 } = calculator.opValues;
    answer.add(new Answer("\\vec{OP}", omitCalc(pmat(P_1, P_2, P_3))));
  }
</script>

<Calculator {calculate}>
  <Inputs inputs={[{ name: "P", type: "coord3d" }]} />
</Calculator>

<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { pmat, pmatrix, sub } from "@math/calculation";

  function calculate() {
    let { A_1, A_2, B_1, B_2 } = calculator.opValues;
    let r = new Answer("\\vec{r}", pmat(sub(B_1, A_1), sub(B_2, A_2)));
    let p = new Answer(pmatrix("x", "y"), {
      answer: `${pmatrix(A_1.answer, A_2.answer)} + t \\cdot ${pmatrix(sub(B_1, A_1).answer, sub(B_2, A_2).answer)} \\;,\\; t \\in \\mathbb{R}`,
    });
    answer.add(p, r);
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "A", type: "coord2d" },
      { name: "B", type: "coord2d" },
    ]}
  />
</Calculator>

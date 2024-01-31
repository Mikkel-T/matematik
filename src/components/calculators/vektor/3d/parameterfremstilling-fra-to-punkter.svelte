<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { pmat, pmatrix, sub } from "@math/calculation";

  function calculate() {
    let { A_1, A_2, A_3, B_1, B_2, B_3 } = calculator.opValues;
    let r_x = sub(B_1, A_1);
    let r_y = sub(B_2, A_2);
    let r_z = sub(B_3, A_3);
    let r = new Answer("\\vec{r}", pmat(r_x, r_y, r_z));
    let p = new Answer(pmatrix("x", "y", "z"), {
      answer: `${pmatrix(A_1.answer, A_2.answer, A_3.answer)} + t \\cdot ${pmatrix(r_x.answer, r_y.answer, r_z.answer)} \\;,\\; t \\in \\mathbb{R}`,
    });
    answer.add(p, r);
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "A", type: "coord3d" },
      { name: "B", type: "coord3d" },
    ]}
  />
</Calculator>

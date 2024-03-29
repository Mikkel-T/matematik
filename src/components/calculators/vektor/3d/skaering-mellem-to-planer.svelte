<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { mul, pmat, pmatrix, frac, sub, na } from "@math/calculation";

  function calculate() {
    let { a_1, b_1, c_1, d_1, a_2, b_2, c_2, d_2 } = calculator.opValues;
    console.log(calculator.opValues);
    let p = pmat(
      na(0),
      frac(
        sub(mul(c_1, d_2), mul(c_2, d_1)),
        sub(mul(b_1, c_2), mul(b_2, c_1)),
      ),
      frac(
        sub(mul(b_2, d_1), mul(b_1, d_2)),
        sub(mul(b_1, c_2), mul(b_2, c_1)),
      ),
    );

    let r = pmat(
      na(1),
      frac(
        sub(mul(a_2, c_1), mul(a_1, c_2)),
        sub(mul(b_1, c_2), mul(b_2, c_1)),
      ),
      frac(
        sub(mul(b_2, a_1), mul(b_1, a_2)),
        sub(mul(b_1, c_2), mul(b_2, c_1)),
      ),
    );
    answer.add(
      new Answer(pmatrix("x", "y", "z"), {
        answer: `${p.answer} + t \\cdot ${r.answer} \\;,\\; t \\in \\mathbb{R}`,
        equation: `${p.equation} + t \\cdot ${r.equation} \\;,\\; t \\in \\mathbb{R}`,
        calculation: `${p.calculation} + t \\cdot ${r.calculation} \\;,\\; t \\in \\mathbb{R}`,
      }),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "a_1", placeholder: "a₁", type: "number" },
      { name: "b_1", placeholder: "b₁", type: "number" },
      { name: "c_1", placeholder: "c₁", type: "number" },
      { name: "d_1", placeholder: "d₁", type: "number" },
      { name: "a_2", placeholder: "a₂", type: "number" },
      { name: "b_2", placeholder: "b₂", type: "number" },
      { name: "c_2", placeholder: "c₂", type: "number" },
      { name: "d_2", placeholder: "d₂", type: "number" },
    ]}
  />
</Calculator>

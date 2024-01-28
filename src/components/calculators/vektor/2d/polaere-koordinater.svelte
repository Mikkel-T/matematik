<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, ansDeg, atanPolar, text, vecLen } from "@math/calculation";

  let info = $state<string>("");

  function calculate() {
    info = "";
    let { a_1, a_2 } = calculator.opValues;
    let r = new Answer("r", vecLen({ x: a_1, y: a_2, name: "a" }));
    let theta = new Answer("\\theta", ansDeg(atanPolar(a_2, a_1)));
    let a = new Answer("\\vec{a}", {
      answer: `(${r.answer}\\;,\\;${theta.answer})`,
    });
    answer.add(a, r, theta);
    if (a_1.answer < 0) {
      info =
        "Da vektorens $x$-koordinat er negativt, lægges der $180^\\circ$ til vinklen.";
    } else if (a_2.answer < 0) {
      info =
        "Da vektorens $y$-koordinat er negativt og $x$-koordinat positivt, lægges der $360^\\circ$ til vinklen.";
    }
  }
</script>

<Calculator {calculate} {info}>
  <Inputs inputs={[{ name: "a", type: "vec2d" }]} />
</Calculator>

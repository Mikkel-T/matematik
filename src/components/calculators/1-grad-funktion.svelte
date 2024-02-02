<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/BasicInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import KaTeX from "@components/utils/KaTeX.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { frac, mul, na, sub } from "@math/calculation";

  function calculate() {
    let { x_1, y_1, x_2, y_2 } = calculator.opValues;
    if (x_1.answer === x_2.answer) {
      throw new Error(
        "$x$ for punkt 1 kan ikke være det samme som $x$ for punkt 2",
      );
    }

    const a = new Answer("a", frac(sub(y_2, y_1), sub(x_2, x_1)));
    const b = new Answer("b", sub(y_1, mul(x_1, a.getNewOp)));

    let fa;
    let fb;

    if (a.getAns == 0) {
      fa = "";
    } else if (Math.abs(+a.getAns) == 1) {
      fa = `${+a.getAns < 0 ? "-" : ""}x`;
    } else {
      fa = `${a.getAns}x`;
    }

    if (b.getAns != 0) {
      if (fa) {
        fb = ` ${+b.getAns > 0 ? "+" : "-"}${Math.abs(+b.getAns)}`;
      } else {
        fb = b.getAns;
      }
    } else {
      fb = fa ? "" : 0;
    }

    const f = new Answer(
      "Forskrift",
      { answer: `f(x) = ${fa}${fb}`, equation: "f(x) = ax+b" },
      "text",
    );

    answer.add(f, a, b);
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "x_1", label: "$x_1$ (x for punkt 1)", placeholder: "x₁" },
      { name: "y_1", label: "$y_1$ (y for punkt 1)", placeholder: "y₁" },
      { name: "x_2", label: "$x_2$ (x for punkt 2)", placeholder: "x₂" },
      { name: "y_2", label: "$y_2$ (y for punkt 2)", placeholder: "y₂" },
    ]}
  />
  <div class="text-center">
    <p>
      Punkt 1: <KaTeX
        math="({calculator.values.x_1}, {calculator.values.y_1})"
      />
    </p>
    <p>
      Punkt 2: <KaTeX
        math="({calculator.values.x_2}, {calculator.values.y_2})"
      />
    </p>
  </div>
</Calculator>

<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, na, pow, sqrt } from "@math/calculation";

  function calculate() {
    let { a_1, a_2, a_3 } = calculator.opValues;
    answer.add(
      new Answer(
        "|\\vec{a}|",
        sqrt(add(pow(a_1, na(2)), add(pow(a_2, na(2)), pow(a_3, na(2))))),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs inputs={[{ name: "a", type: "vec3d" }]} />
</Calculator>

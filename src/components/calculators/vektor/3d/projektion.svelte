<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { dotProd, frac, numMulVec, vecLenSq } from "@math/calculation";

  function calculate() {
    let { a_1, a_2, a_3, b_1, b_2, b_3 } = calculator.opValues;
    answer.add(
      new Answer(
        "\\vec{a}_{\\vec{b}}",
        numMulVec(
          frac(
            dotProd(
              { x: a_1, y: a_2, z: a_3, name: "a" },
              { x: b_1, y: b_2, z: b_3, name: "b" },
            ),
            vecLenSq({ x: b_1, y: b_2, z: b_3, name: "b" }),
          ),
          { x: b_1, y: b_2, z: b_3, name: "b" },
        ),
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "a", type: "vec3d" },
      { name: "b", type: "vec3d" },
    ]}
  />
</Calculator>

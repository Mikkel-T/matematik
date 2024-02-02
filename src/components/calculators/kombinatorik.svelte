<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/BasicInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { add, fac, frac, mul, na, par, pow, sub } from "@math/calculation";

  function calculate() {
    let { n, k } = calculator.opValues;
    if (k.answer < 0) {
      throw new Error("k må ikke være negativ");
    }

    if (n.answer < k.answer) {
      throw new Error("n skal være større end k");
    }

    answer.add(
      new Answer(
        "Ordnet uden tilbagelægning",
        frac(fac(n), fac(par(sub(n, k)))),
        "text",
      ),

      new Answer("Ordnet med tilbagelægning", pow(n, k), "text"),
      new Answer(
        "Uordnet uden tilbagelægning",
        frac(fac(n), mul(fac(par(sub(n, k))), fac(k))),
        "text",
      ),
      new Answer(
        "Uordnet med tilbagelægning",
        frac(
          fac(par(sub(add(n, k), na(1)))),
          mul(fac(par(sub(n, na(1)))), fac(k)),
        ),
        "text",
      ),
    );
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      {
        name: "n",
        label: "$n$ (Antallet af muligheder, som en stikprøve udtages fra)",
      },
      {
        name: "k",
        label: "$k$ (Antallet af elementer, som udvælges i stikprøven)",
      },
    ]}
  />
</Calculator>

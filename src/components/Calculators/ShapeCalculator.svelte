<script>
  import { reset } from "@store/answer";
  import { vars, error, reset as resetShape } from "@store/shape";
  import { onMount } from "svelte";
  import ShapeForm from "@components/Calculators/ShapeForm.svelte";
  export let page;

  let allCalculators = import.meta.glob("../../calculators/**/*.ts");

  let calculator;
  let shape;

  onMount(async () => {
    calculator = (await allCalculators[`../../calculators/${page}.ts`]())
      .default.calculator;
    shape = calculator.component;
  });

  function calculate() {
    $error = "";
    let calcValues = { ...$vars };
    reset();
    resetShape();

    try {
      calculator.calculate(calcValues);
    } catch (err) {
      $error = err.message;
      reset();
      resetShape();
    }
  }
</script>

<ShapeForm {calculate}>
  {#if shape}
    <svelte:component this={shape} />
  {:else}
    <div class="text-center">Loading...</div>
  {/if}
</ShapeForm>

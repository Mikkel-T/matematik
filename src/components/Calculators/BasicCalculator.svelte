<script>
  import { reset } from "@store/answer";
  import Calculator from "@components/Calculators/Calculator.svelte";
  import TextWithKaTeX from "@components/TextWithKaTeX.svelte";
  import { onMount } from "svelte";
  export let page;

  let allCalculators = import.meta.glob("../../calculators/**/*.ts");
  let calculator;
  onMount(async () => {
    calculator = (await allCalculators[`../../calculators/${page}.ts`]())
      .default.calculator;
  });

  let inputs = {};
  let vars = {};
  let error = "";

  function calculate() {
    vars = { ...vars, ...inputs };
    error = "";
    reset();
    calculator.inputs.forEach((i) => {
      if (!Object.hasOwnProperty.call(vars, i.name) || !vars[i.name]) {
        vars[i.name] = 0;
      }
    });

    try {
      calculator.calculate(vars);
    } catch (err) {
      error = err.message;
      reset();
    }
  }
</script>

<Calculator {calculate} {error}>
  {#if calculator}
    {#each calculator.inputs as input}
      <div class="mb-3">
        <div>
          <label class="font-bold" for={input.name}>
            {#if input.label}
              <TextWithKaTeX text={input.label} />
            {:else}
              {input.name}
            {/if}
          </label>
        </div>
        <input
          name={input.name}
          bind:value={inputs[input.name]}
          placeholder={input.placeholder || input.name}
          type="number"
          step="any"
          class="w-full rounded-md border border-dracula-light-400 bg-dracula-light-300 p-2 focus:border-dracula-light-500 focus:ring-dracula-light-500 dark:border-dracula-darker-600 dark:bg-dracula-darker-800 dark:focus:border-dracula-blue-500 dark:focus:ring-dracula-blue-500"
        />
      </div>
    {/each}

    {#if calculator.text}
      {#each calculator.text as template}
        <div class="text-center">
          <TextWithKaTeX text={template(inputs)} />
        </div>
      {/each}
    {/if}
  {:else}
    <div>Indlæser...</div>
  {/if}
</Calculator>

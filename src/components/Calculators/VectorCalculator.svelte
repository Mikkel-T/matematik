<script>
  import { reset } from "@store/answer";
  import Calculator from "@components/Calculators/Calculator.svelte";
  import TextWithKaTeX from "@components/TextWithKaTeX.svelte";
  import { onMount } from "svelte";
  import KaTeX from "@components/KaTeX.svelte";
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
      ["", "1", "2"].forEach((j) => {
        const name = i.name + j;
        if (!Object.hasOwnProperty.call(vars, name) || !vars[name]) {
          vars[name] = 0;
        }
      });
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
    <div class="mb-3">
      <TextWithKaTeX text={calculator.text} />
    </div>
    {#each calculator.inputs as input}
      <div class="mb-2 text-center">
        {#if input.type === "vector"}
          <KaTeX math={`\\vec{${input.name}} =`} />
          <div class="inline-flex flex-row">
            <KaTeX math="\Biggl(" />
            <div class="mx-1 flex flex-col justify-around">
              <input
                name="{input.name}1"
                bind:value={inputs[`${input.name}1`]}
                placeholder="{input.name}₁"
                type="number"
                step="any"
                class="w-20 border-0 border-b-2 border-b-dracula-darker-700 bg-transparent p-0 px-1 focus:border-dracula-light-500 focus:ring-0 dark:focus:border-dracula-blue-500"
              />
              <input
                name="{input.name}2"
                bind:value={inputs[`${input.name}2`]}
                placeholder="{input.name}₂"
                type="number"
                step="any"
                class="w-20 border-0 border-b-2 border-b-dracula-darker-700 bg-transparent p-0 px-1 focus:border-dracula-light-500 focus:ring-0 dark:focus:border-dracula-blue-500"
              />
            </div>
            <KaTeX math="\Biggl)" />
          </div>
        {:else if input.type === "coordinate"}
          <KaTeX math="{input.name} =" />
          <div class="inline-flex flex-row">
            <KaTeX math="(" />
            <input
              name="{input.name}1"
              bind:value={inputs[`${input.name}1`]}
              placeholder="{input.name.toLowerCase()}₁"
              type="number"
              step="any"
              class="w-20 border-0 border-b-2 border-b-dracula-darker-700 bg-transparent p-0 px-1 focus:border-dracula-light-500 focus:ring-0 dark:focus:border-dracula-blue-500"
            />
            <span class="mx-1">,</span>
            <input
              name="{input.name}2"
              bind:value={inputs[`${input.name}2`]}
              placeholder="{input.name.toLowerCase()}₂"
              type="number"
              step="any"
              class="w-20 border-0 border-b-2 border-b-dracula-darker-700 bg-transparent p-0 px-1 focus:border-dracula-light-500 focus:ring-0 dark:focus:border-dracula-blue-500"
            />
            <KaTeX math=")" />
          </div>
        {:else if input.type === "number"}
          <KaTeX math="{input.name} =" />
          <input
            name={input.name}
            bind:value={inputs[input.name]}
            placeholder={input.name}
            type="number"
            step="any"
            class="w-20 border-0 border-b-2 border-b-dracula-darker-700 bg-transparent p-0 px-1 focus:border-dracula-light-500 focus:ring-0 dark:focus:border-dracula-blue-500"
          />
        {/if}
      </div>
    {/each}
  {:else}
    <div>Indlæser...</div>
  {/if}
</Calculator>

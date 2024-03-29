<script lang="ts">
  import TextWithKaTeX from "@components/utils/TextWithKaTeX.svelte";
  import { calculator } from "@state/calculator.svelte";
  import { parseInput, validateInput } from "@math/input";

  let {
    inputs,
  }: {
    inputs: {
      name: string;
      label?: string;
      placeholder?: string;
    }[];
  } = $props();

  let input_vals = $state<Record<string, string>>({});

  $effect(() => {
    calculator.inputError = false;
    let tmp_vals: Record<string, number> = {};
    for (const input of inputs) {
      if (!input_vals[input.name]) {
        tmp_vals[input.name] = 0;
      } else if (!validateInput(input_vals[input.name])) {
        calculator.inputError = true;
        tmp_vals[input.name] = 0;
      } else {
        tmp_vals[input.name] = parseInput(input_vals[input.name]);
      }
    }
    calculator.values = { ...tmp_vals };
  });
</script>

{#each inputs as input}
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
      bind:value={input_vals[input.name]}
      placeholder={input.placeholder || input.name}
      type="text"
      class:!border-red-500={input_vals[input.name] &&
        !validateInput(input_vals[input.name])}
      class="w-full rounded-md border bg-zinc-100 p-2 !ring-0 dark:bg-zinc-800"
    />
    {#if input_vals[input.name] && !validateInput(input_vals[input.name])}
      <div class="text-xs text-red-500">Tallet er ugyldigt</div>
    {/if}
  </div>
{/each}

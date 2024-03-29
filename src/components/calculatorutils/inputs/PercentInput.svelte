<script lang="ts">
  import { parseInput, validateInput } from "@math/input";
  import { calculator } from "@state/calculator.svelte";

  let { name }: { name: string } = $props();

  let value = $state<string>("");

  $effect(() => {
    calculator.inputError = false;
    if (validateInput(value)) {
      calculator.values[name] = parseInput(value) ?? 0;
    } else {
      calculator.inputError = true;
      calculator.values[name] = 0;
    }
  });
</script>

<input
  {name}
  bind:value
  type="text"
  class="w-20 border-0 border-b-2 border-zinc-300 bg-transparent p-1 outline-none !ring-0 focus:border-zinc-500 dark:border-zinc-600 dark:focus:border-zinc-500"
  class:!border-red-500={value && !validateInput(value)}
/>

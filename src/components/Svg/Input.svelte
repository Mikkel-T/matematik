<script lang="ts">
  import { parseInput, validateInput } from "@math/input";
  import { calculator } from "@state/calculator.svelte";

  let {
    name,
    placeholder,
    class: styles,
    readonly,
  }: {
    name: string;
    placeholder?: string;
    class?: string;
    readonly?: boolean;
  } = $props();

  $effect(() => {
    calculator.inputError = false;
    if (validateInput(calculator.shapeInputs[name])) {
      calculator.values[name] = parseInput(calculator.shapeInputs[name]) ?? 0;
    } else if (calculator.shapeInputs[name] === "") {
      delete calculator.values[name];
    } else {
      calculator.inputError = true;
    }
  });
</script>

<input
  {name}
  bind:value={calculator.shapeInputs[name]}
  type="text"
  id={name}
  placeholder={placeholder || name}
  {readonly}
  class="w-36 rounded-md border bg-zinc-100 p-2 !ring-0 transition-opacity duration-300 dark:bg-zinc-800 {styles}"
  class:opacity-50={readonly}
  class:!border-red-500={calculator.shapeInputs[name] &&
    !validateInput(calculator.shapeInputs[name])}
/>

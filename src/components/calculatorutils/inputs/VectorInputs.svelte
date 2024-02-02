<script lang="ts">
  import KaTeX from "@components/utils/KaTeX.svelte";
  import { parseInput, validateInput } from "@math/input";
  import { calculator } from "@state/calculator.svelte";

  let { inputs } = $props<{
    inputs: {
      name: string;
      type: "vec2d" | "vec3d" | "coord2d" | "coord3d" | "number";
    }[];
  }>();

  let input_vals = $state<Record<string, string>>({});

  $effect(() => {
    calculator.inputError = false;
    let tmp_vals: Record<string, number> = {};
    for (const input of inputs) {
      if (input.type === "number") {
        if (!input_vals[input.name]) {
          tmp_vals[input.name] = 0;
        } else if (!validateInput(input_vals[input.name])) {
          tmp_vals[input.name] = 0;
        } else {
          tmp_vals[input.name] = parseInput(input_vals[input.name]);
        }
      }

      let checks = 0;
      if (input.type === "coord2d" || input.type === "vec2d") {
        checks = 2;
      } else if (input.type === "coord3d" || input.type === "vec3d") {
        checks = 3;
      }
      for (let i = 1; i <= checks; i++) {
        if (!input_vals[`${input.name}_${i}`]) {
          tmp_vals[`${input.name}_${i}`] = 0;
        } else if (!validateInput(input_vals[`${input.name}_${i}`])) {
          calculator.inputError = true;
          tmp_vals[`${input.name}_${i}`] = 0;
        } else {
          tmp_vals[`${input.name}_${i}`] = parseInput(
            input_vals[`${input.name}_${i}`],
          );
        }
      }
    }
    calculator.values = { ...tmp_vals };
  });
</script>

{#each inputs as input}
  <div class="mb-2 text-center">
    {#if input.type === "coord2d"}
      <KaTeX math="{input.name} = " />
      <div class="inline-flex flex-row">
        <KaTeX math="(" />
        <input
          name="{input.name}_1"
          bind:value={input_vals[`${input.name}_1`]}
          placeholder="{input.name}₁"
          type="text"
          class="vector-input !ring-0"
          class:!border-red-500={input_vals[`${input.name}_1`] &&
            !validateInput(input_vals[`${input.name}_1`])}
        />
        <span class="mx-1">,</span>
        <input
          name="{input.name}_2"
          bind:value={input_vals[`${input.name}_2`]}
          placeholder="{input.name}₂"
          type="text"
          class="vector-input !ring-0"
          class:!border-red-500={input_vals[`${input.name}_2`] &&
            !validateInput(input_vals[`${input.name}_2`])}
        />
        <KaTeX math=")" />
      </div>
    {:else if input.type === "coord3d"}
      <KaTeX math="{input.name} = " />
      <div class="inline-flex flex-row">
        <KaTeX math="(" />
        <input
          name="{input.name}_1"
          bind:value={input_vals[`${input.name}_1`]}
          placeholder="{input.name}₁"
          type="text"
          class="vector-input !ring-0"
          class:!border-red-500={input_vals[`${input.name}_1`] &&
            !validateInput(input_vals[`${input.name}_1`])}
        />
        <span class="mx-1">,</span>
        <input
          name="{input.name}_2"
          bind:value={input_vals[`${input.name}_2`]}
          placeholder="{input.name}₂"
          type="text"
          class="vector-input !ring-0"
          class:!border-red-500={input_vals[`${input.name}_2`] &&
            !validateInput(input_vals[`${input.name}_2`])}
        />
        <span class="mx-1">,</span>
        <input
          name="{input.name}_3"
          bind:value={input_vals[`${input.name}_3`]}
          placeholder="{input.name}₃"
          type="text"
          class="vector-input !ring-0"
          class:!border-red-500={input_vals[`${input.name}_3`] &&
            !validateInput(input_vals[`${input.name}_3`])}
        />
        <KaTeX math=")" />
      </div>
    {:else if input.type === "vec2d"}
      <KaTeX math={`\\vec{${input.name}} =`} />
      <div class="inline-flex flex-row">
        <KaTeX math="\Biggl(" />
        <div class="mx-1 flex flex-col justify-around">
          <input
            name="{input.name}_1"
            bind:value={input_vals[`${input.name}_1`]}
            placeholder="{input.name}₁"
            type="text"
            class="vector-input !ring-0"
            class:!border-red-500={input_vals[`${input.name}_1`] &&
              !validateInput(input_vals[`${input.name}_1`])}
          />
          <input
            name="{input.name}_2"
            bind:value={input_vals[`${input.name}_2`]}
            placeholder="{input.name}₂"
            type="text"
            class="vector-input !ring-0"
            class:!border-red-500={input_vals[`${input.name}_2`] &&
              !validateInput(input_vals[`${input.name}_2`])}
          />
        </div>
        <KaTeX math="\Biggl)" />
      </div>
    {:else if input.type === "vec3d"}
      <KaTeX math={`\\vec{${input.name}} =`} />
      <div class="inline-flex flex-row items-center">
        <span class="text-2xl">
          <KaTeX math="\Biggl(" />
        </span>
        <div class="mx-1 flex flex-col justify-around">
          <input
            name="{input.name}_1"
            bind:value={input_vals[`${input.name}_1`]}
            placeholder="{input.name}₁"
            type="text"
            class="vector-input !ring-0"
            class:!border-red-500={input_vals[`${input.name}_1`] &&
              !validateInput(input_vals[`${input.name}_1`])}
          />
          <input
            name="{input.name}_2"
            bind:value={input_vals[`${input.name}_2`]}
            placeholder="{input.name}₂"
            type="text"
            class="vector-input !ring-0"
            class:!border-red-500={input_vals[`${input.name}_2`] &&
              !validateInput(input_vals[`${input.name}_2`])}
          />
          <input
            name="{input.name}_3"
            bind:value={input_vals[`${input.name}_3`]}
            placeholder="{input.name}₃"
            type="text"
            class="vector-input !ring-0"
            class:!border-red-500={input_vals[`${input.name}_3`] &&
              !validateInput(input_vals[`${input.name}_3`])}
          />
        </div>
        <span class="text-2xl">
          <KaTeX math="\Biggr)" />
        </span>
      </div>
    {:else if input.type === "number"}
      <KaTeX math="{input.name} =" />
      <input
        name={input.name}
        bind:value={input_vals[input.name]}
        placeholder={input.name}
        type="text"
        class="vector-input !ring-0"
        class:!border-red-500={input_vals[input.name] &&
          !validateInput(input_vals[input.name])}
      />
    {/if}
  </div>
{/each}

<style>
  .vector-input {
    @apply w-20 border-0 border-b-2 border-zinc-300 bg-transparent p-0 px-1 focus:border-zinc-500 dark:border-zinc-600 dark:focus:border-zinc-500;
  }
</style>

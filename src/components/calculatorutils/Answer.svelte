<script lang="ts">
  import KaTeX from "@components/utils/KaTeX.svelte";
  import { text } from "@math/calculation";
  import { calculator } from "@state/calculator.svelte";
  import Clipboard from "@components/utils/Clipboard.svelte";

  const titles: Record<string, string> = {
    answer: "Svar",
    calculation: "Beregning",
    equation: "Ligning",
  };
</script>

<div class="w-full text-center">
  {#each Object.keys(titles) as title}
    {#if calculator.answer.filter((i) => i.has(title))[0]}
      <div class="mb-1 mt-2 text-lg font-bold">{titles[title]}:</div>
      {#each calculator.answer as ans}
        {#if ans.has(title)}
          <div class="flex flex-row justify-center gap-3">
            {#if ans.nameDisplay === "equals"}
              <KaTeX math="{ans.name} = {ans.get(title)}" displayMode />
            {:else if ans.nameDisplay === "hide"}
              <KaTeX math={ans.get(title).toString()} displayMode />
            {:else if ans.nameDisplay === "text"}
              <KaTeX
                math="{text(ans.name + ': ')} {ans.get(title)}"
                displayMode
              />
            {:else}
              <KaTeX
                math="{text(ans.name + ': ')} {ans.get(title)}"
                displayMode
              />
            {/if}
            <Clipboard
              text={ans.nameDisplay === "equals"
                ? `${ans.name} = ${ans.get(title)}`
                : ans.get(title)}
            />
          </div>
        {/if}
      {/each}
    {/if}
  {/each}
</div>

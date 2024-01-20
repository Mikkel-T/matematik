<script lang="ts">
  import KaTeX from "./KaTeX.svelte";

  let { text } = $props<{ text: string }>();
</script>

<div>
  {#each text
    .split(" ")
    .map((i) => i.replace(/^\$/, "$LaTeX_"))
    .join(" ")
    .split("$") as t}
    {#if t.startsWith("LaTeX_")}
      <KaTeX math={t.substring(6)} />
    {:else}
      {t}
    {/if}
  {/each}
</div>

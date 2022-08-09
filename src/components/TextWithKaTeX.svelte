<script>
  export let text;
  import KaTeX from "@components/KaTeX.svelte";
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

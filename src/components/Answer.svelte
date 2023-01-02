<script>
  import KaTeX from "@components/KaTeX.svelte";
  import { answer } from "@store/answer";
  import { text } from "@utils/TeX";
  import Clipboard from "@components/Clipboard.svelte";
  import MdiContentCopy from "~icons/mdi/content-copy";

  const titles = {
    answer: { title: "Svar", copyText: "svaret" },
    calculation: { title: "Beregning", copyText: "beregningen" },
    equation: { title: "Ligning", copyText: "ligningen" },
  };
</script>

<div class="w-full text-center">
  {#each Object.keys(titles) as title}
    {#if $answer.filter((i) => i[title])[0]}
      <div class="mt-2 mb-1 text-lg font-bold">{titles[title].title}:</div>
      {#each $answer as ans}
        {#if Object.hasOwnProperty.call(ans, title)}
          <div>
            {#if ans.nameDisplay === "equals"}
              <KaTeX math="{ans.name} = {ans[title]}" />
            {:else if ans.nameDisplay === "hide"}
              <KaTeX math={ans[title].toString()} />
            {:else if ans.nameDisplay === "text"}
              {ans.name}: <KaTeX math={ans[title].toString()} />
            {:else}
              <KaTeX math={ans.name} /> : <KaTeX math={ans[title].toString()} />
            {/if}
            <Clipboard
              text={ans[title].toString()}
              message="Kopierede {titles[title].copyText}"
            >
              <MdiContentCopy class="icon mb-1 inline-block h-5 w-5" />
            </Clipboard>
          </div>
        {/if}
      {/each}
    {/if}
  {/each}
</div>

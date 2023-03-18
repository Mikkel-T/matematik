<script>
  import KaTeX from "@components/KaTeX.svelte";
  import { answer } from "@store/answer";
  import Clipboard from "@components/Clipboard.svelte";
  import MdiContentCopy from "~icons/mdi/content-copy";
  import { text } from "@utils/TeX";

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
        {#if Object.hasOwnProperty.call(ans, title) && ans[title]}
          <div>
            {#if ans.nameDisplay === "equals"}
              <KaTeX math="{ans.name} = {ans[title]}" />
            {:else if ans.nameDisplay === "hide"}
              <KaTeX math={ans[title]} />
            {:else if ans.nameDisplay === "text"}
              <KaTeX math={text(ans.name)} /> : <KaTeX math={ans[title]} />
            {:else}
              <KaTeX math={ans.name} /> : <KaTeX math={ans[title]} />
            {/if}
            <Clipboard
              text={ans.nameDisplay === "equals"
                ? `${ans.name} = ${ans[title]}`
                : ans[title]}
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

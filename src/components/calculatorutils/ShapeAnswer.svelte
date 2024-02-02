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
      <div
        class="mb-1 mt-2 text-lg font-bold"
        class:sm:hidden={title === "answer"}
      >
        {titles[title]}:
      </div>
      <table class="not-prose mx-auto" class:sm:hidden={title === "answer"}>
        <thead>
          <tr>
            <th>Navn</th>
            <th>{titles[title]}</th>
            <th>Kopiér</th>
          </tr>
        </thead>
        <tbody>
          {#each calculator.answer as ans}
            {#if ans.has(title)}
              <tr
                class="*:border *:border-zinc-800 *:p-2 *:dark:border-zinc-200"
              >
                {#if ans.nameDisplay === "text"}
                  <td><KaTeX math={text(ans.name)} /></td>
                  <td><KaTeX math={ans.get(title).toString()} /></td>
                {:else}
                  <td><KaTeX math={ans.name} /></td>
                  <td><KaTeX math={ans.get(title).toString()} /></td>
                {/if}
                <td>
                  <Clipboard
                    text={ans.nameDisplay === "equals"
                      ? `${ans.name} = ${ans.get(title)}`
                      : ans.get(title)}
                  />
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    {/if}
  {/each}
</div>

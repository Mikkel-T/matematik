<script>
  import KaTeX from '@components/KaTeX.svelte';
  import { answer } from '@store/answer';
  import { text } from '@utils/TeX';
  import Clipboard from '@components/Clipboard.svelte';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';

  const titles = {
    answer: 'Svar',
    calculation: 'Beregning',
    equation: 'Ligning',
  };
</script>

<div class="w-full text-center">
  {#each Object.keys(titles) as title}
    {#if $answer.filter((i) => i[title])[0]}
      <div class="font-bold mb-1 mt-2 text-lg">{titles[title]}:</div>
      {#each $answer as ans}
        {#if ans.hasOwnProperty(title)}
          <div>
            <KaTeX math={text(ans.name)} />: <KaTeX
              math={ans[title].toString()}
            />
            <Clipboard text={ans[title].toString()}
              ><div class="h-5 w-5 inline-block icon">
                <FaCopy />
              </div></Clipboard
            >
          </div>
        {/if}
      {/each}
    {/if}
  {/each}
</div>

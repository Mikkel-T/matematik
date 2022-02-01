<script>
  import CopyModal from '@components/CopyModal.svelte';
  import KaTeX from '@components/KaTeX.svelte';
  import { answer } from '@store/answer';
  import { text } from '@utils/TeX';
  import { emitter } from '@event/event';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';

  const titles = {
    answer: { title: 'Svar', copyText: 'svaret' },
    calculation: { title: 'Beregning', copyText: 'beregningen' },
    equation: { title: 'Ligning', copyText: 'ligningen' },
  };

  function openCopyModal(options) {
    emitter.emit('copyModal', options);
  }
</script>

<div class="w-full text-center">
  {#each Object.keys(titles) as title}
    {#if $answer.filter((i) => i[title])[0]}
      <div class="mt-2 mb-1 text-lg font-bold">{titles[title].title}:</div>
      {#each $answer as ans}
        {#if Object.hasOwnProperty.call(ans, title)}
          <div>
            <KaTeX math={text(ans.name)} />: <KaTeX
              math={ans[title].toString()}
            />
            <div
              class="inline-block w-5 h-5 cursor-pointer icon"
              on:click={() =>
                openCopyModal({
                  message: `Kopierede ${titles[title].copyText}`,
                  text: {
                    LaTeX: ans[title].toString(),
                    unicode: ans.unicode[title].toString(),
                  },
                })}
            >
              <FaCopy />
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  {/each}
</div>
<CopyModal />

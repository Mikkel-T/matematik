<script>
  import KaTeX from '@components/KaTeX.svelte';
  import { answer } from '@store/answer';
  import 'katex/dist/katex.min.css';
  import Clipboard from '@components/Clipboard.svelte';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
</script>

<div class="w-full text-center">
  {#if $answer.filter((i) => i['answer'])[0]}
    <div class="font-bold mb-1 mt-2 text-lg">Svar:</div>
    {#each $answer as ans}
      <div>
        {ans.name}: <KaTeX math={ans['answer'].toString()} />
        <Clipboard text={ans['answer'].toString()}
          ><div class="h-5 w-5 inline-block icon"><FaCopy /></div></Clipboard
        >
      </div>
    {/each}
  {/if}

  {#if $answer.filter((i) => i['calculation'])[0]}
    <div class="font-bold mb-1 mt-2 text-lg">Beregning:</div>
    {#each $answer as ans}
      <div>
        {ans.name}: <KaTeX math={ans['calculation'].toString()} />
        <Clipboard text={ans['calculation'].toString()}
          ><div class="h-5 w-5 inline-block icon"><FaCopy /></div></Clipboard
        >
      </div>
    {/each}
  {/if}

  {#if $answer.filter((i) => i['equation'])[0]}
    <div class="font-bold mb-1 mt-2 text-lg">Ligning:</div>
    {#each $answer as ans}
      <div>
        {ans.name}: <KaTeX math={ans['equation'].toString()} />
        <Clipboard text={ans['equation'].toString()}
          ><div class="h-5 w-5 inline-block icon"><FaCopy /></div></Clipboard
        >
      </div>
    {/each}
  {/if}
</div>

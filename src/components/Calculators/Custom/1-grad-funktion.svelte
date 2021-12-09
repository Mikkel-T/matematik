<script>
  import KaTeX from '@components/KaTeX.svelte';
  import { answer } from '@store/answer';
  import 'katex/dist/katex.min.css';
  import Clipboard from '@components/Clipboard.svelte';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
</script>

<div class="w-full text-center">
  {#if $answer.filter((i) => i['answer'])[0]}
    <div class="font-bold mb-1 mt-2 text-lg">Forskrift:</div>
    <div>
      <KaTeX
        math={`f(x) = ${$answer.filter((i) => i.name === 'a')[0].answer}x ${
          +$answer.filter((i) => i.name === 'b')[0].answer > 0 ? '+' : '-'
        } ${Math.abs(+$answer.filter((i) => i.name === 'b')[0].answer)}`}
      />
      <Clipboard
        text={`f(x) = ${$answer.filter((i) => i.name === 'a')[0].answer}x ${
          +$answer.filter((i) => i.name === 'b')[0].answer > 0 ? '+' : '-'
        } ${Math.abs(+$answer.filter((i) => i.name === 'b')[0].answer)}`}
        ><div class="h-5 w-5 inline-block icon"><FaCopy /></div></Clipboard
      >
    </div>
  {/if}
</div>

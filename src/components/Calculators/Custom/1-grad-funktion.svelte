<script>
  import KaTeX from '@components/KaTeX.svelte';
  import 'katex/dist/katex.min.css';
  import Clipboard from '@components/Clipboard.svelte';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
  import { emitter } from '@event/event';

  let f = '';
  emitter.on('calculation', (vars) => {
    let a;
    let b;
    if (vars['a'] == 0) {
      a = '';
    } else if (Math.abs(+vars['a']) == 1) {
      a = `${+vars['a'] < 0 ? '-' : ''}x`;
    } else {
      a = `${vars['a']}x`;
    }

    if (vars['b'] != 0) {
      if (a) {
        b = ` ${+vars['b'] > 0 ? '+' : '-'}${Math.abs(+vars['b'])}`;
      } else {
        b = vars['b'];
      }
    } else {
      b = a ? '' : 0;
    }

    f = `f(x) = ${a}${b}`;
  });
</script>

<div class="w-full text-center">
  {#if f}
    <div class="font-bold mb-1 mt-2 text-lg">Forskrift:</div>
    <div>
      <KaTeX math={f} />
      <Clipboard text={f}
        ><div class="h-5 w-5 inline-block icon"><FaCopy /></div></Clipboard
      >
    </div>
  {/if}
</div>

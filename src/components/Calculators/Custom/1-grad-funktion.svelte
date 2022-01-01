<script>
  import KaTeX from '@components/KaTeX.svelte';
  import Clipboard from '@components/Clipboard.svelte';
  import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
  import { emitter } from '@event/event';

  let f = '';
  emitter.on('calculation', (vars) => {
    let a;
    let b;
    if (vars.a == 0) {
      a = '';
    } else if (Math.abs(+vars.a) == 1) {
      a = `${+vars.a < 0 ? '-' : ''}x`;
    } else {
      a = `${vars.a}x`;
    }

    if (vars.b != 0) {
      if (a) {
        b = ` ${+vars.b > 0 ? '+' : '-'}${Math.abs(+vars.b)}`;
      } else {
        b = vars.b;
      }
    } else {
      b = a ? '' : 0;
    }

    f = `f(x) = ${a}${b}`;
  });
</script>

<div class="w-full text-center">
  {#if f}
    <div class="mt-2 mb-1 text-lg font-bold">Forskrift:</div>
    <div>
      <KaTeX math={f} />
      <Clipboard text={f} message="Kopierede forskriften"
        ><div class="inline-block w-5 h-5 icon"><FaCopy /></div></Clipboard
      >
    </div>
  {/if}
</div>

<script>
  import copy from 'copy-to-clipboard';
  import { emitter } from '@event/event';
  export let text;
  export let message = 'Kopierede teksten';

  function onCopy() {
    copy(text);
    emitter.emit('toast', message, {
      type: 'success',
    });
  }
</script>

<span on:click={onCopy} class="cursor-pointer select-none">
  <slot />
</span>

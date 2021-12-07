<script>
  import copy from 'copy-to-clipboard';
  import { emitter } from '@event/toast';
  export let text;

  function onCopy() {
    copy(text);
    emitter.emit('toast', 'Kopierede teksten', {
      type: 'success',
    });
  }
</script>

<span on:click={onCopy} class="cursor-pointer select-none">
  <slot />
</span>

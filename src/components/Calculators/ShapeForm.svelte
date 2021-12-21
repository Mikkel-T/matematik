<script>
  import { emitter } from '@event/event';
  import { error } from '@store/shape';
  import Submit from '@components/Calculators/Submit.svelte';

  function calculate() {
    emitter.emit('shape-calc');
  }
</script>

<div>
  <form on:submit|preventDefault={calculate}>
    <slot />
    <div class="w-3/4 mx-auto md:w-2/6">
      <Submit />
    </div>
  </form>
  {#if error}
    <div class="text-center">
      {$error}
    </div>
  {/if}
</div>

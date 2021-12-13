<script>
  import Submit from '@components/Calculators/Submit.svelte';
  export let calculate;
  export let error;
</script>

<div class="w-3/4 mx-auto md:w-2/6">
  <form on:submit|preventDefault={calculate}>
    <slot />
    <Submit />
  </form>
  {#if error}
    <div class="text-center">
      {error}
    </div>
  {/if}
</div>

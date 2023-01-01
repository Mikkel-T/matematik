<script>
  import { error } from "@store/shape";
  import Submit from "@components/Calculators/Submit.svelte";

  export let calculate;
</script>

<div>
  <form on:submit|preventDefault={calculate}>
    <slot />
    <div class="mx-auto w-3/4 md:w-2/6">
      <Submit />
    </div>
  </form>
  {#if error}
    <div class="text-center">
      {$error}
    </div>
  {/if}
</div>

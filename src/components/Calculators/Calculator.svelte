<script>
  import Submit from "@components/Calculators/Submit.svelte";
  import Error from "@components/Calculators/Error.svelte";
  export let calculate;
  export let error;
</script>

<div class="mx-auto w-3/4 md:w-2/6">
  <form on:submit|preventDefault={calculate}>
    <slot />
    <Submit />
  </form>
  <Error {error} />
</div>

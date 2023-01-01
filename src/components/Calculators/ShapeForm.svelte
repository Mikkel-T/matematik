<script>
  import { error } from "@store/shape";
  import Submit from "@components/Calculators/Submit.svelte";
  import Error from "./Error.svelte";

  export let calculate;
</script>

<div>
  <form on:submit|preventDefault={calculate}>
    <slot />
    <div class="mx-auto w-3/4 md:w-2/6">
      <Submit />
    </div>
  </form>
  <Error error={$error} />
</div>

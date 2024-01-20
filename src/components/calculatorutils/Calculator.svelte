<script lang="ts">
  import Submit from "./Submit.svelte";
  import Error from "./Error.svelte";
  import { answer, calculator } from "@state/calculator.svelte";

  let { calculate, children } = $props<{
    calculate: () => void;
    children: any;
  }>();

  let error = $state<string>("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    try {
      calculator.runChecks();
      error = "";
      answer.reset();
      calculate();
    } catch (e: any) {
      console.error(e);
      error = e.message;
      answer.reset();
    }
  }
</script>

<div class="not-prose print:hidden">
  <form onsubmit={handleSubmit}>
    {@render children()}
    <Submit />
  </form>
  <Error {error} />
</div>

<script lang="ts">
  import Submit from "./Submit.svelte";
  import Error from "./Error.svelte";
  import { answer, calculator } from "@state/calculator.svelte";
  import Info from "./Info.svelte";

  let {
    calculate,
    children,
    info,
  }: {
    calculate: () => void;
    info?: string;
    children: any;
  } = $props();

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
  <Info {info} />
  <Error {error} />
</div>

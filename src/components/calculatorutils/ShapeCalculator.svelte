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
    children: any;
    info?: string;
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
    <div class="mx-auto w-3/4 sm:w-2/3 md:w-1/2 xl:w-1/3">
      <Submit />
    </div>
  </form>
  <Info {info} />
  <Error {error} />
</div>

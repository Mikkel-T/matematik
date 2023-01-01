<script>
  import IcBaselineWarningAmber from "~icons/ic/baseline-warning-amber";

  export let error;
</script>

{#if error}
  <div
    class="m-auto mt-3 flex w-fit items-center justify-center rounded-lg border-l-4 border-dracula-red-700 border-opacity-30 bg-dracula-red bg-opacity-30 p-3 text-center"
  >
    <IcBaselineWarningAmber class="mr-2 inline text-dracula-red" />
    {error}
  </div>
{/if}

<script lang="ts">
  import TextWithKaTeX from "@components/utils/TextWithKaTeX.svelte";

  let { error }: { error: string } = $props();
</script>

{#if error}
  <div
    class="m-auto mt-3 flex w-fit items-center justify-center rounded-lg border-l-4 border-red-800 border-opacity-40 bg-red-400 bg-opacity-20 p-3 text-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="mr-2 inline text-red-500"
      ><path
        fill="currentColor"
        d="M12 5.99L19.53 19H4.47zM12 2L1 21h22z"
      /><path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z" /></svg
    >
    <TextWithKaTeX text={error} />
  </div>
{/if}

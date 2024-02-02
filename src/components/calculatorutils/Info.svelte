<script lang="ts">
  import TextWithKaTeX from "@components/utils/TextWithKaTeX.svelte";

  let { info } = $props<{ info?: string }>();
</script>

{#if info}
  <div
    class="m-auto mt-3 flex w-fit items-center justify-center rounded-lg border-l-4 border-blue-800 border-opacity-40 bg-blue-400 bg-opacity-20 p-3 text-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="mr-2 inline text-blue-500"
      ><path
        fill="currentColor"
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
      /><path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z" /></svg
    >
    <TextWithKaTeX text={info} />
  </div>
{/if}

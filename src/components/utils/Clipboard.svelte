<script lang="ts">
  import copy from "copy-to-clipboard";
  let { text }: { text: string } = $props();

  let copied = $state<boolean>(false);

  function onCopy() {
    copy(text);
    copied = true;
    setTimeout(() => (copied = false), 2500);
  }
</script>

<button onclick={onCopy} class="inline cursor-pointer select-none">
  {#if copied}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="mb-1 inline-block size-5"
      ><path
        fill="currentColor"
        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
      /></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="mb-1 inline-block size-5"
      ><path
        fill="currentColor"
        d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"
      /></svg
    >
  {/if}
</button>

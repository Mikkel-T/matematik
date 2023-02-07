<script>
  import copy from "copy-to-clipboard";
  import toast from "svelte-french-toast";
  export let text;
  export let message = "Kopierede teksten";

  function onCopy() {
    copy(text);
    toast.success(message);
  }
</script>

<button on:click={onCopy} class="inline cursor-pointer select-none">
  <slot />
</button>

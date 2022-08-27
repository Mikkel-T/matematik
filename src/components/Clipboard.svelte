<script>
  import copy from "copy-to-clipboard";
  import toast from "solid-toast";
  export let text;
  export let message = "Kopierede teksten";

  function onCopy() {
    copy(text);
    toast.success(message);
  }
</script>

<span on:click={onCopy} class="cursor-pointer select-none">
  <slot />
</span>

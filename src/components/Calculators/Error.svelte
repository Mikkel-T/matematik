<script>
  export let error;
</script>

{#if error}
  <div class="p-3 text-center text-dracula-red">
    {error}
  </div>
{/if}

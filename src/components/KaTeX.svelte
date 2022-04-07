<script lang="ts">
  import katex from "katex";
  import "katex/dist/katex.min.css";

  export let math;
  export let displayMode = false;

  const options = {
    displayMode: displayMode,
    throwOnError: false,
  };

  $: katexString = katex.renderToString(math, options);
</script>

<span>
  {@html katexString}
</span>

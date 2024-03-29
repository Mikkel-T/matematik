<script lang="ts">
  import katex from "katex";

  let {
    math,
    displayMode = false,
  }: {
    math: string;
    displayMode?: boolean;
  } = $props();

  const options = {
    displayMode,
    throwOnError: false,
  };
</script>

<span>
  {@html katex.renderToString(math, options)}
</span>

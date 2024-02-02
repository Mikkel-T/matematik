<script lang="ts">
  import katex from "katex";

  let { math, displayMode = false } = $props<{
    math: string;
    displayMode?: boolean;
  }>();

  const options = {
    displayMode,
    throwOnError: false,
  };
</script>

<span>
  {@html katex.renderToString(math, options)}
</span>

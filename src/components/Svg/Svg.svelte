<script lang="ts">
  let {
    width,
    height,
    children,
    class: styles,
  }: {
    width: number | string;
    height: number | string;
    children: any;
    class?: string;
  } = $props();
</script>

<svg
  {width}
  {height}
  class="m-auto fill-transparent stroke-2 {styles}"
  xmlns="http://www.w3.org/2000/svg"
>
  {@render children()}
</svg>

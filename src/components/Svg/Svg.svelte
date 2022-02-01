<script>
  export let width;
  export let height;
</script>

<svg
  {width}
  {height}
  class="m-auto fill-transparent stroke-2"
  xmlns="http://www.w3.org/2000/svg"
>
  <slot />
</svg>

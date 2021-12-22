<script>
  export let width;
  export let height;
</script>

<svg
  {width}
  {height}
  class="m-auto stroke-2 fill-transparent"
  xmlns="http://www.w3.org/2000/svg"
>
  <slot />
</svg>

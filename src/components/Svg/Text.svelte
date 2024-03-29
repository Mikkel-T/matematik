<script lang="ts">
  let { x, y, text }: { x: number; y: number; text: string } = $props();
</script>

<text {x} {y} class="fill-current stroke-0">
  {text}
</text>

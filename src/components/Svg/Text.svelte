<script lang="ts">
  let { x, y, text } = $props<{ x: number; y: number; text: string }>();
</script>

<text {x} {y} class="fill-current stroke-0">
  {text}
</text>

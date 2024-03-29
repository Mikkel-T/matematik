<script lang="ts">
  let {
    x,
    y,
    r,
    class: styles,
  }: {
    x: number;
    y: number;
    r: number;
    class?: string;
  } = $props();
</script>

<circle cx={x} cy={y} {r} stroke="currentColor" class={styles} />

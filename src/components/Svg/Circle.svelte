<script lang="ts">
  let {
    x,
    y,
    r,
    class: styles,
  } = $props<{
    x: number;
    y: number;
    r: number;
    class?: string;
  }>();
</script>

<circle cx={x} cy={y} {r} stroke="currentColor" class={styles} />

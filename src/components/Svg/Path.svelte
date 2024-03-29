<script lang="ts">
  let { d, class: styles }: { d: string; class?: string } = $props();
</script>

<path stroke="currentColor" {d} class={styles} />

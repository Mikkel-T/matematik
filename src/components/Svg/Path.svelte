<script lang="ts">
  let { d, class: styles } = $props<{ d: string; class?: string }>();
</script>

<path stroke="currentColor" {d} class={styles} />

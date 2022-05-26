<script>
  import { vars } from '@store/shape';
  export let name;
  export let placeholder;
  export let styles;
  export let readOnly;
</script>

<input
  type="number"
  step="any"
  {name}
  id={name}
  placeholder={placeholder || name}
  {readOnly}
  class="w-36 rounded-md border bg-dracula-blue-100 p-2 transition-opacity duration-300 dark:bg-dracula-darker-800 {styles}"
  class:opacity-50={readOnly}
  bind:value={$vars[name]}
/>

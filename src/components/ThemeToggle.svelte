<script>
  import FaMoon from 'svelte-icons/fa/FaMoon.svelte';
  import FaSun from 'svelte-icons/fa/FaSun.svelte';
  import { onMount } from 'svelte';

  let theme = '';
  onMount(() => {
    const isDarkTheme = document.documentElement.classList.contains('dark');
    theme = isDarkTheme ? 'dark' : 'light';
  });

  function changeTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark');
  }
</script>

<div
  on:click={changeTheme}
  class="inline-flex absolute right-0 items-center m-2 ml-2 w-12 h-6 rounded-full cursor-pointer group bg-nord10"
>
  {#if theme}
    <div
      class="absolute ml-0.5 w-5 h-5 rounded-full transition-all duration-300 dark:translate-x-6 group-hover:ring-4 bg-nord6 ring-nord11"
    />
  {/if}
  <span
    class="absolute w-4 h-4 transition-colors duration-300 translate-x-1 text-nord13 icon dark:text-nord1"
  >
    <FaSun />
  </span>
  <span
    class="absolute ml-1 w-4 h-4 transition-colors duration-300 translate-x-6 text-nord1 icon dark:text-nord13"
  >
    <FaMoon />
  </span>
</div>

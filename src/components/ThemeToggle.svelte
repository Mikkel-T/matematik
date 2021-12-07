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
  class="group absolute right-0 w-12 m-2 h-6 ml-2 rounded-full items-center inline-flex cursor-pointer bg-nord10"
>
  {#if theme}
    <div
      class="h-5 w-5 group-hover:ring-4 rounded-full transition-all dark:translate-x-6 duration-300 bg-nord6 ml-0.5 ring-nord11 absolute"
    />
  {/if}
  <span
    class="h-4 w-4 text-nord13 dark:text-nord1 absolute translate-x-1 transition-colors duration-300 icon"
  >
    <FaSun />
  </span>
  <span
    class="h-4 w-4 text-nord1 dark:text-nord13 absolute translate-x-6 ml-1 transition-colors duration-300 icon"
  >
    <FaMoon />
  </span>
</div>

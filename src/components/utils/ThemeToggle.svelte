<script lang="ts">
  let theme = $state("");
  $effect(() => {
    const isDarkTheme = document.documentElement.classList.contains("dark");
    theme = isDarkTheme ? "dark" : "light";
  });

  function changeTheme() {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark");
  }
</script>

<button
  onclick={changeTheme}
  class="group inline-flex h-6 w-12 items-center rounded-full bg-sky-500 transition-opacity duration-300 ease-in"
  class:opacity-0={!theme}
  class:cursor-pointer={theme}
>
  <div
    class="absolute ml-0.5 h-5 w-5 rounded-full bg-white ring-red-400 transition-all duration-300 group-hover:ring-4 dark:translate-x-6"
  />

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512"
    class="icon absolute h-4 w-4 translate-x-1 text-orange-300 transition-colors duration-300 dark:text-gray-800"
    ><path
      fill="currentColor"
      d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391L13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256L2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M160 256a96 96 0 1 1 192 0a96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0a128 128 0 1 0 256 0"
    /></svg
  >

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    class="icon absolute h-5 w-5 translate-x-[1.65rem] text-gray-800 transition-colors duration-300 dark:text-orange-300"
    ><path
      fill="currentColor"
      d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
    /></svg
  >
</button>

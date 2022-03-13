<script>
  import { emitter } from '@event/event';
  import KaTeX from '@components/KaTeX.svelte';
  let hidden = true;
  let background;
  let options;

  emitter.on('copyModal', (args) => {
    options = args;
    hidden = false;
  });
</script>

<div
  bind:this={background}
  on:click={(e) => {
    e.target === background && (hidden = !hidden);
  }}
  class="fixed left-0 top-0 z-50 h-full w-full cursor-pointer items-center justify-center overflow-auto bg-[rgba(0,0,0,0.4)]"
  class:hidden
  class:flex={!hidden}
>
  <div class="w-5/12 rounded-lg border border-nord1 bg-nord0 p-10">
    {#if options}
      <div class="text-center">
        <KaTeX math={options.text.LaTeX} />
      </div>
      <p>
        LaTeX: {options.text.LaTeX}
      </p>
      <p>
        Unicode: {options.text.unicode}
      </p>
    {/if}
  </div>
</div>

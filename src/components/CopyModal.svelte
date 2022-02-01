<script>
  import { emitter } from '@event/event';
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
  class="fixed z-50 left-0 cursor-pointer top-0 w-full items-center justify-center h-full overflow-auto bg-[rgba(0,0,0,0.4)]"
  class:hidden
  class:flex={!hidden}
>
  <div class="p-10 w-5/12 rounded-lg border bg-nord0 border-nord1">
    {JSON.stringify(options)}
  </div>
</div>

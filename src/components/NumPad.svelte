<script>
  export let numHandle;
</script>

<button
  on:click={numHandle}
  class=" text-center text-xl text-gray-500 dark:text-gray-400 flex items-center justify-center border border-gray-950/20 active:brightness-75 transition-transform"
>
  <slot />
</button>

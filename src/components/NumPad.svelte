<script>
  export let numHandle;
</script>

<button
  on:click={numHandle}
  class="bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 p-4 rounded-md text-center text-xl text-gray-500 dark:text-gray-400 flex items-center justify-center shadow active:brightness-75 transition-transform"
>
  <slot />
</button>

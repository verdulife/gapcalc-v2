<script>
  export let front_value;
  const sizes = [null, "small", "medium", "large"];
</script>

<section class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
  <div class="grid grid-cols-2 w-full">
    {#each sizes as size}
      <label
        class="
          w-full flex items-end aspect-[4/3] font-medium leading-5 text-sm
          p-2 rounded-lg border border-gray-300 dark:border-gray-700
          transition-colors shadow shadow-black/50
          {front_value === size
          ? 'bg-gradient-to-tr from-green-400 to-green-300 text-gray-700'
          : 'bg-gradient-to-tr from-gray-400 to-gray-300 dark:from-gray-800 dark:to-gray-700'} : '
        "
      >
        <input
          type="radio"
          name="tipo"
          bind:group={front_value}
          value={size}
          class="appearance-none"
        />
        <span>{size}</span>
      </label>
    {/each}
  </div>
</section>

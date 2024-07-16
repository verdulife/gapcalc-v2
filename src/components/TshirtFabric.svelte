<script>
  export let tshirt_value;
  const tshirt = [true, false];
</script>

<section class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
  <div class="grid grid-cols-2 w-full">
    {#each tshirt as value}
      <label
        class="
          w-full flex items-center justify-center
          p-2 text-center rounded-lg font-medium
          transition-colors
          {tshirt_value === value && 'bg-green-300 text-gray-700'}
        "
      >
        <input
          type="radio"
          name="caras"
          bind:group={tshirt_value}
          {value}
          class="appearance-none"
        />
        <span class="capitalize text-sm"
          >{value ? "Camiseta incluida" : "Solo planchado"}</span  
        >
      </label>
    {/each}
  </div>
</section>

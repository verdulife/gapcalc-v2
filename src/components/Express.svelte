<script>
  export let express_value;
  const express = [false, true];
</script>

<section class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
  <div class="grid grid-cols-2 w-full">
    {#each express as value}
      <label
        class="
          w-full flex items-center justify-center
          p-2 text-center rounded-lg font-medium
          transition-colors
          {express_value === value && 'bg-green-300 text-gray-700'}
        "
      >
        <input
          type="radio"
          name="caras"
          bind:group={express_value}
          {value}
          class="appearance-none"
        />
        <span class="capitalize text-sm">{value ? "Urgente" : "Normal"}</span>
      </label>
    {/each}
  </div>
</section>

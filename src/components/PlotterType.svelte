<script>
  import { Plotters } from "@/lib/stores";

  export let plotter_value;
  $: currentPlotter = $Plotters.find((plotter) => plotter.id === plotter_value);
  $: open = false;

  $: plotter_value, (open = false);
</script>

<details class="flex flex-col gap-2" name="plotters" bind:open>
  <summary class="font-bold text-lg">{currentPlotter.name}</summary>

  <div class="grid grid-cols-2 w-full gap-2 mt-2">
    {#each $Plotters as plotter}
      <label
        class="
          w-full flex items-center justify-center
          p-4 text-center rounded-md border border-gray-400 dark:border-gray-600
          transition-colors
          {plotter_value === plotter.id
          ? 'bg-green-300 text-gray-700'
          : 'bg-gray-300 dark:bg-gray-700'}
        "
      >
        <input
          type="radio"
          name="tipo"
          bind:group={plotter_value}
          value={plotter.id}
          class="appearance-none"
        />
        <span>{plotter.name}</span>
      </label>
    {/each}
  </div>
</details>

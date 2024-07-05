<script>
  import { Plotters } from "@/lib/stores";
  export let plotter_value;
</script>

<div class="flex flex-wrap w-full gap-2">
  {#each $Plotters as plotter}
    <label
      class="px-4 py-2 grow text-center {plotter_value === plotter.id
        ? 'bg-blue-500'
        : 'bg-gray-950'}"
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

<script>
  import { Plotters } from "@/lib/stores";
  export let plotter_value;
</script>

<section class="flex flex-col gap-2">
  <select
    bind:value={plotter_value}
    class="w-full bg-gray-700 border border-gray-600 p-4 rounded-md outline-none"
  >
    {#each $Plotters as plotter}
      <option value={plotter.id}>{plotter.name}</option>
    {/each}
  </select>
</section>

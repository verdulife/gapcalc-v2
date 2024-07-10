<script>
  import { Plotters } from "@/lib/stores";
  import Card from "./Card.svelte";

  export let plotter_value;
  $: currentPlotter = $Plotters.find((plotter) => plotter.id === plotter_value);
  $: open = false;

  $: plotter_value, (open = false);
</script>

<details class="flex flex-col gap-2 px-6" name="plotters" bind:open>
  <summary class="font-bold text-lg">{currentPlotter.label}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each $Plotters as plotter}
      <Card bind:value={plotter_value} current={plotter} />
    {/each}
  </div>
</details>

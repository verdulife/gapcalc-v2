<script>
  import { Plotters } from "@/lib/stores";
  import { PLOTTER_LOSS_CM } from "@/lib/consts";

  export let plotter_value, height_value;
  $: plotter = $Plotters.find((p) => p.id === plotter_value);
</script>

<div class="flex w-full gap-2">
  <span class="growoutline-none bg-gray-950 px-4 py-2 w-full text-gray-500">
    {plotter.width_cm - PLOTTER_LOSS_CM}
  </span>

  <input
    type="number"
    class="grow outline-none bg-gray-950 px-4 py-2 w-full"
    bind:value={height_value}
  />
</div>

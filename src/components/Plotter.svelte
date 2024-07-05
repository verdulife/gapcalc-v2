<script>
  import PlotterType from "@/components/PlotterType.svelte";
  import PlotterSize from "./PlotterSize.svelte";
  import PlotterResult from "./PlotterResult.svelte";

  let plotter_value = "papel_masas";
  let plotter_height = 100;
</script>

<div class="flex flex-col gap-8">
  <PlotterType bind:plotter_value />
  <hr class="border-gray-500 w-full" />
  <PlotterSize bind:height_value={plotter_height} {plotter_value} />
  <hr class="border-gray-500 w-full" />
  <PlotterResult {plotter_value} {plotter_height} />
</div>

<script>
  import PlotterType from "@/components/PlotterType.svelte";
  import PlotterSize from "./PlotterSize.svelte";
  import PlotterResult from "./PlotterResult.svelte";

  let plotter_value = "papel_masas";
  let height_value = "0";
</script>

<div class="flex flex-col gap-6 p-8 pb-28">
  <PlotterResult {plotter_value} {height_value} />
  <hr class="border-gray-800 w-full" />
  <PlotterType bind:plotter_value />
  <hr class="border-gray-800 w-full" />
  <PlotterSize bind:height_value {plotter_value} />
</div>

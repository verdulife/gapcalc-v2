<script>
  import PlotterType from "@/components/PlotterType.svelte";
  import PlotterSize from "./PlotterSize.svelte";
  import PlotterResult from "./PlotterResult.svelte";
  import Express from "./Express.svelte";

  let plotter_value = "papel_masas";
  let height_value = "0";
  let express_value = false;
</script>

<div class="flex flex-col gap-6 h-screen">
  <PlotterResult {plotter_value} {height_value} {express_value} />
  <hr class="border-gray-300 dark:border-gray-800 w-full" />
  <PlotterType bind:plotter_value />
  <hr class="border-gray-300 dark:border-gray-800 w-full" />
  <div class="px-6">
    <Express bind:express_value />
  </div>
  <hr class="border-gray-300 dark:border-gray-800 w-full" />
  <PlotterSize bind:height_value {plotter_value} />
</div>

<script>
  import { Plotters } from "@/lib/stores";
  import { WIDTH_LOSS_CM } from "@/lib/consts";

  import PlotterType from "@/components/PlotterType.svelte";
  import PlotterSize from "@/components/PlotterSize.svelte";
  import PlotterResult from "@/components/PlotterResult.svelte";
  import Express from "@/components/Express.svelte";
  import InputUnits from "@/components/InputUnits.svelte";

  let plotter_value = "papel_masas";
  let width_value = (
    $Plotters.find((p) => p.id === plotter_value).width_cm - WIDTH_LOSS_CM
  ).toString();
  let height_value = "100";
  let express_value = false;
  let amount_value = "1";
</script>

<div class="flex flex-col gap-6">
  <PlotterResult
    {plotter_value}
    {width_value}
    {height_value}
    {express_value}
    {amount_value}
  />

  <PlotterSize bind:width_value bind:height_value />

  <hr class="border-gray-300 dark:border-gray-800 w-full" />

  <div class="px-6 grid grid-cols-2 gap-2">
    <InputUnits bind:value={amount_value} units="und" />
    <Express bind:express_value />
  </div>

  <hr class="border-gray-300 dark:border-gray-800 w-full" />

  <PlotterType bind:plotter_value />
</div>

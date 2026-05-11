<script lang="ts">
  import { WIDTH_LOSS_CM } from "@/lib/consts";
  import PlotterType from "@/components/PlotterType.svelte";
  import PlotterSize from "@/components/PlotterSize.svelte";
  import PlotterResult from "@/components/PlotterResult.svelte";
  import Express from "@/components/Express.svelte";
  import InputUnits from "@/components/InputUnits.svelte";

  interface Props {
    plotters: any[];
    vars: any;
  }

  let { plotters, vars }: Props = $props();

  let plotter_value = $state("papel_masas");
  let width_value = $state("");
  let height_value = $state("100");
  let express_value = $state(false);
  let amount_value = $state("1");

  $effect(() => {
    const found = plotters.find((p) => p.id === plotter_value);
    width_value = ((found?.width_cm ?? 0) - WIDTH_LOSS_CM).toString();
  });
</script>

<div class="flex flex-col gap-6">
  <PlotterResult
    {vars}
    {plotters}
    {plotter_value}
    bind:width_value
    {height_value}
    bind:express_value
    {amount_value}
  />

  <PlotterSize bind:width_value bind:height_value />

  <hr class="border-gray-300 dark:border-gray-800 w-full" />

  <div class="px-6 grid grid-cols-2 gap-2">
    <InputUnits bind:value={amount_value} units="und" />
    <Express bind:express_value />
  </div>

  <hr class="border-gray-300 dark:border-gray-800 w-full" />

  <PlotterType {plotters} bind:plotter_value />
</div>
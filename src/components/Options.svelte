<script>
  import OptionsPaper from "@/components/OptionsPaper.svelte";
  import OptionsPlotter from "@/components/OptionsPlotter.svelte";
  import OptionsTshirt from "@/components/OptionsTshirt.svelte";
  import OptionsVars from "@/components/OptionsVars.svelte";

  export let papers, plotters, tshirts, vars;
</script>

<div class="flex flex-col gap-2 p-8">
  <OptionsPaper {papers} />
  <OptionsPlotter {plotters} />
  <OptionsTshirt {tshirts} />
  <OptionsVars {vars} />
</div>

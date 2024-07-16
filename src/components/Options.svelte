<script>
  import OptionsPaper from "@/components/OptionsPaper.svelte";
  import OptionsPlotter from "@/components/OptionsPlotter.svelte";

  export let papers, plotters;
</script>

<div class="flex flex-col gap-2 p-8">
  <OptionsPaper {papers} />
  <OptionsPlotter {plotters} />
</div>

<script>
  import Card from "./Card.svelte";

  export let plotters, plotter_value;
</script>

<section class="flex flex-col gap-2 px-6">
  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each plotters as plotter}
      <Card bind:value={plotter_value} current={plotter} />
    {/each}
  </div>
</section>

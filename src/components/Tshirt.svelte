<script>
  import TshirtSide from "@/components/TshirtSide.svelte";
  import TshirtFabric from "@/components/TshirtFabric.svelte";
  import TshirtResult from "./TshirtResult.svelte";

  export let tshirts, vars;

  let front_value = "large";
  let back_value = "empty";
  let tshirt_value = true;
</script>

<div class="flex flex-col gap-6">
  <TshirtResult {tshirts} {tshirt_value} {front_value} {back_value} {vars} />

  <div class="grid grid-cols-1 gap-2 px-6">
    <TshirtFabric bind:tshirt_value />
  </div>

  <TshirtSide {tshirts} bind:value={front_value} title="Frontal" />
  <TshirtSide {tshirts} bind:value={back_value} title="Trasera" />
</div>

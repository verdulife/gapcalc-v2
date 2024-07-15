<script>
  import TshirtFront from "./TshirtFront.svelte";

  let front_value = "large";
</script>

<div class="flex flex-col gap-2 p-8">
  <TshirtFront bind:value={front_value} />
</div>

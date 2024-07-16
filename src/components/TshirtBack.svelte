<script>
  import Card from "@/components/Card.svelte";
  import { Tshirts } from "@/lib/stores";

  export let back_value;
</script>

<div class="flex flex-col gap-2 px-6">
  <h2 class="font-medium text-lg">Trasera</h2>

  <div class="grid grid-cols-4 w-full gap-2 mt-2">
    {#each $Tshirts as tshirt}
      <Card bind:value={back_value} current={tshirt} />
    {/each}
  </div>
</div>

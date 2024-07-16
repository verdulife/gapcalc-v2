<script>
  import Card from "@/components/Card.svelte";
  import { Tshirts } from "@/lib/stores";

  export let value, title;
  $: currentTshirt = $Tshirts.find((tshirt) => tshirt.id === value);
</script>

<div class="flex flex-col gap-2 px-6">
  <h2 class="text-lg font-medium">{title}</h2>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each $Tshirts as tshirt}
      <Card bind:value current={tshirt} />
    {/each}
  </div>
</div>

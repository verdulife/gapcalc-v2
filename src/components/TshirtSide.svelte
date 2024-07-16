<script>
  import Card from "@/components/Card.svelte";

  export let tshirts, value, title;
</script>

<div class="flex flex-col gap-2 px-6">
  <h2 class="text-lg font-medium">{title}</h2>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each tshirts as tshirt}
      <Card bind:value current={tshirt} />
    {/each}
  </div>
</div>

<script>
  import Card from "@/components/Card.svelte";

  export let prints, print_value;
  $: currentPrint = prints.find((print) => print.id === print_value);
</script>

<details class="flex flex-col gap-2 px-6" name="prints" open>
  <summary class="font-medium text-lg">{currentPrint.label}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each prints as print}
      <Card bind:value={print_value} current={print} />
    {/each}
  </div>
</details>

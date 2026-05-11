<script lang="ts">
  import Card from "@/components/Card.svelte";

  interface Props {
    prints: any[];
    print_value?: $bindable<string>;
  }

  let { prints, print_value = $bindable("") }: Props = $props();

  let currentPrint = $derived(prints.find((p) => p.id === print_value) ?? prints[0]);
</script>

<details class="flex flex-col gap-2 px-6" name="prints" open>
  <summary class="font-medium text-lg">{currentPrint?.label ?? ""}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each prints as print}
      <Card bind:value={print_value} current={print} />
    {/each}
  </div>
</details>
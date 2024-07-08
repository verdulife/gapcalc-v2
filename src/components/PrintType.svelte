<script>
  import { Prints } from "@/lib/stores";

  export let print_value;
  $: currentPrint = $Prints.find((print) => print.id === print_value);
</script>

<details class="flex flex-col gap-2" name="prints" open>
  <summary class="font-bold text-lg">{currentPrint.label}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each $Prints as print}
      <label
        class="
          w-full aspect-square flex items-center justify-center
          p-4 text-center rounded-md border border-gray-600
          transition-colors
          {print_value === print.id ? 'bg-green-300 text-black' : 'bg-gray-700'}
        "
      >
        <input
          type="radio"
          name="tipo"
          bind:group={print_value}
          value={print.id}
          class="appearance-none"
        />
        <span>{print.label}</span>
      </label>
    {/each}
  </div>
</details>

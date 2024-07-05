<script>
  import { Prints } from "@/lib/stores";

  export let print_value;
</script>

<div class="flex flex-wrap w-full gap-2">
  {#each $Prints as print}
    <label
      class="px-4 py-2 grow text-center {print_value === print.id
        ? 'bg-blue-500'
        : 'bg-gray-950'}"
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

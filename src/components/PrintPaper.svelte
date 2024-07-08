<script>
  import { Papers } from "@/lib/stores";

  export let paper_value;
  $: currentPaper = $Papers.find((paper) => paper.id === paper_value);
</script>

<details class="flex flex-col gap-2" name="prints">
  <summary class="font-bold text-lg">{currentPaper.name}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each $Papers as paper}
      <label
        class="
          w-full flex items-center justify-center
          p-4 text-center rounded-md border border-gray-400 dark:border-gray-600
          transition-colors
          {paper_value === paper.id
          ? 'bg-green-300 text-gray-700'
          : 'bg-gray-300 dark:bg-gray-700'}
        "
      >
        <input
          type="radio"
          name="papel"
          bind:group={paper_value}
          value={paper.id}
          class="appearance-none"
        />
        <span>{paper.name}</span>
      </label>
    {/each}
  </div>
</details>

<script>
  import { Papers } from "@/lib/stores";

  export let paper_value;
</script>

<div class="flex flex-wrap gap-2">
  {#each $Papers as paper}
    <label
      class="px-4 py-2 grow text-center {paper_value === paper.id
        ? 'bg-blue-500'
        : 'bg-gray-950'}"
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

<script>
  import Card from "@/components/Card.svelte";

  export let papers, paper_value;
  $: currentPaper = papers.find((paper) => paper.id === paper_value);
</script>

<details class="flex flex-col gap-2 px-6" name="prints">
  <summary class="font-bold text-lg">{currentPaper.label}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each papers as paper}
      <Card bind:value={paper_value} current={paper} />
    {/each}
  </div>
</details>

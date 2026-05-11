<script lang="ts">
  import Card from "@/components/Card.svelte";

  interface Props {
    papers: any[];
    paper_value?: $bindable<string>;
  }

  let { papers, paper_value = $bindable("") }: Props = $props();

  let currentPaper = $derived(papers.find((p) => p.id === paper_value) ?? papers[0]);
</script>

<details class="flex flex-col gap-2 px-6" name="papers">
  <summary class="font-bold text-lg">{currentPaper?.label ?? ""}</summary>

  <div class="grid grid-cols-3 w-full gap-2 mt-2">
    {#each papers as paper}
      <Card bind:value={paper_value} current={paper} />
    {/each}
  </div>
</details>
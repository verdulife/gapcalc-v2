<script lang="ts">
  import PrintType from "@/components/PrintType.svelte";
  import PrintFaces from "@/components/PrintFaces.svelte";
  import PrintAmount from "@/components/PrintAmount.svelte";
  import PrintPaper from "@/components/PrintPaper.svelte";
  import Express from "@/components/Express.svelte";

  interface Props {
    papers: any[];
    prints: any[];
    vars: any;
  }

  let { papers, prints, vars }: Props = $props();

  let print_value = $state("tarjetas_visita");
  let faces_value = $state(2);
  let paper_value = $state("300gr");
  let express_value = $state(false);
</script>

<section class="flex flex-col gap-6 py-6">
  <PrintType {prints} bind:print_value />
  <hr class="border-gray-300 dark:border-gray-800" />
  <PrintPaper {papers} bind:paper_value />
  <hr class="border-gray-300 dark:border-gray-800" />
  <div class="grid grid-cols-2 w-full gap-2 px-6">
    <PrintFaces bind:faces_value />
    <Express bind:express_value />
  </div>
  <hr class="border-gray-300 dark:border-gray-800" />
  <PrintAmount
    {vars}
    {papers}
    {prints}
    {print_value}
    {faces_value}
    {paper_value}
    {express_value}
  />
</section>
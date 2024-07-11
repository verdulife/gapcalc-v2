<script>
  import PrintType from "@/components/PrintType.svelte";
  import PrintFaces from "@/components/PrintFaces.svelte";
  import PrintAmount from "@/components/PrintAmount.svelte";
  import PrintPaper from "@/components/PrintPaper.svelte";
  import Express from "./Express.svelte";

  let print_value = "tarjetas_visita";
  let faces_value = 2;
  let paper_value = "300gr";
  let express_value = false;
</script>

<section class="flex flex-col gap-6 h-full py-6">
  <PrintType bind:print_value />
  <hr class="border-gray-300 dark:border-gray-800" />
  <PrintPaper bind:paper_value />
  <hr class="border-gray-300 dark:border-gray-800" />
  <div class="grid grid-cols-2 w-full gap-2 px-6">
    <PrintFaces bind:faces_value />
    <Express bind:express_value />
  </div>
  <hr class="border-gray-300 dark:border-gray-800" />
  <PrintAmount {print_value} {faces_value} {paper_value} {express_value} />
</section>

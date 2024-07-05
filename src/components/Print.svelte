<script>
  import PrintType from "@/components/PrintType.svelte";
  import PrintFaces from "@/components/PrintFaces.svelte";
  import PrintAmount from "@/components/PrintAmount.svelte";
  import PrintPaper from "@/components/PrintPaper.svelte";

  let print_value = "tarjetas_visita";
  let faces_value = 2;
  let paper_value = "300_mate_satinado";
</script>

<section class="flex flex-col gap-2l">
  <PrintType bind:print_value />
  <hr class="border-gray-600 my-4" />
  <PrintFaces bind:faces_value />
  <hr class="border-gray-600 my-4" />
  <PrintPaper bind:paper_value />
  <hr class="border-gray-600 my-4" />
  <PrintAmount {print_value} {faces_value} {paper_value} />
</section>

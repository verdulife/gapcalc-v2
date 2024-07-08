<script>
  import PrintType from "@/components/PrintType.svelte";
  import PrintFaces from "@/components/PrintFaces.svelte";
  import PrintAmount from "@/components/PrintAmount.svelte";
  import PrintPaper from "@/components/PrintPaper.svelte";

  let print_value = "tarjetas_visita";
  let faces_value = 2;
  let paper_value = "300_gr";
</script>

<section class="flex flex-col gap-6 overflow-y-auto h-screen p-8 pb-28">
  <PrintType bind:print_value />
  <hr class="border-gray-800" />
  <PrintFaces bind:faces_value />
  <hr class="border-gray-800" />
  <PrintPaper bind:paper_value />
  <hr class="border-gray-800" />
  <PrintAmount {print_value} {faces_value} {paper_value} />
</section>

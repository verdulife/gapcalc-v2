<script>
  import { Plotters } from "@/lib/stores";
</script>

<section class="flex flex-col gap-2">
  <h2>Plotter</h2>
  <ul class="flex flex-col gap-2">
    <li class="flex gap-2 w-full text-sm text-gray-500">
      <span class="grow w-full">Nombre</span>
      <span class="grow w-1/3">Ancho</span>
      <span class="grow w-1/3">Precio</span>
    </li>

    {#each $Plotters as plotter}
      <li class="flex gap-2">
        <input
          type="text"
          value={plotter.name}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-full"
        />

        <input
          type="number"
          value={plotter.width_cm}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/3"
        />

        <input
          type="number"
          value={plotter.price}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/3"
        />
      </li>
    {/each}
  </ul>
</section>

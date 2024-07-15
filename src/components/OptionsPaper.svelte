<script>
  import { Papers } from "@/lib/stores";
</script>

<section class="flex flex-col gap-2">
  <h2>Papeles</h2>
  <ul class="flex flex-col gap-2">
    <li class="flex gap-2 w-full text-sm text-gray-500">
      <span class="grow w-full">Nombre</span>
      <span class="grow w-1/3">1 Cara</span>
      <span class="grow w-1/3">2 Caras</span>
    </li>

    {#each $Papers as paper}
      <li class="flex gap-2">
        <input
          type="text"
          value={paper.label}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-full"
        />

        <input
          type="number"
          value={paper.price[0]}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/3"
        />

        <input
          type="number"
          value={paper.price[1]}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/3"
        />
      </li>
    {/each}
  </ul>
</section>

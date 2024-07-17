<script>
  export let plotters;

  async function update(plotter) {
    await fetch("/api/plotter", {
      method: "POST",
      body: JSON.stringify(plotter),
    });
  }
</script>

<details class="flex flex-col gap-2" name="priceList">
  <summary
    class="px-4 py-2 bg-gray-800 border border-gray-950 rounded-lg text-lg"
    >Plotter</summary
  >

  <ul class="flex flex-col gap-2 p-4">
    <li class="flex gap-2 w-full text-sm text-gray-500">
      <span class="grow w-full">Nombre</span>
      <span class="grow w-1/3">Ancho</span>
      <span class="grow w-1/3">Precio</span>
    </li>

    {#each plotters as plotter}
      <li class="flex items-center gap-2">
        <p class="text-gray-100 grow w-full">
          {plotter.label}
        </p>

        <input
          type="number"
          bind:value={plotter.width_cm}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/3 rounded-md border border-gray-800"
          on:change={() => update(plotter)}
        />

        <input
          type="number"
          step="0.1"
          bind:value={plotter.price}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/3 rounded-md border border-gray-800"
          on:change={() => update(plotter)}
        />
      </li>
    {/each}
  </ul>
</details>

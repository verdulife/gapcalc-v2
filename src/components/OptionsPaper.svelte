<script>
  export let papers;

  /* async function update(paper) {
    await fetch("/api/paper", {
      method: "POST",
      body: JSON.stringify(paper),
    });
  } */
</script>

<details class="flex flex-col gap-2" name="priceList" open>
  <summary
    class="px-4 py-2 bg-gray-800 border border-gray-950 rounded-lg text-lg"
    >Papeles</summary
  >

  <ul class="flex flex-col gap-2 p-4">
    <li class="flex gap-2 w-full text-sm text-gray-500">
      <span class="grow w-full">Nombre</span>
      <span class="grow w-1/4">Precio</span>
    </li>

    {#each papers as paper}
      <li class="flex items-center gap-2">
        <p class="text-gray-100 grow w-full">{paper.label}</p>

        <input
          type="number"
          step="0.1"
          bind:value={paper.price}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-800"
          disabled
        />
      </li>
    {/each}
  </ul>
</details>

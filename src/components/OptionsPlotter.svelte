<script lang="ts">
  let { plotters, onSave, onCreate, onDelete } = $props();

  let newLabel = $state("");
  let newWidth = $state("");
  let newPrice = $state("");
  let newMinPrice = $state("16");
  let creating = $state(false);
  let error = $state("");

  function handleChange(plotter: any, field: string, value: string) {
    onSave({ ...plotter, [field]: parseFloat(value) || 0 });
  }

  async function handleDelete(plotter: any) {
    if (!confirm(`¿Eliminar "${plotter.label}"?`)) return;
    await onDelete(plotter.id);
  }

  async function handleCreate() {
    error = "";
    if (!newLabel.trim() || !newWidth || !newPrice || !newMinPrice) {
      error = "Rellena todos los campos";
      return;
    }
    creating = true;
    const res = await onCreate({
      label: newLabel.trim(),
      width_cm: parseFloat(newWidth),
      price: parseFloat(newPrice),
      min_price: parseFloat(newMinPrice),
    });
    if (res.ok) {
      newLabel = "";
      newWidth = "";
      newPrice = "";
      newMinPrice = "16";
    } else {
      const data = await res.json();
      error = data.error || "Error al crear";
    }
    creating = false;
  }
</script>

<details class="flex flex-col gap-2" name="priceList">
  <summary class="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-lg">
    Plotter
  </summary>

  <ul class="flex flex-col gap-2 p-4">
    <li class="flex gap-2 w-full text-sm text-gray-500">
      <span class="grow w-full">Nombre</span>
      <span class="grow w-1/4">Ancho</span>
      <span class="grow w-1/4">Precio</span>
      <span class="grow w-1/4">P. Mín.</span>
      <span class="w-8"></span>
    </li>

    {#each plotters as plotter}
      <li class="flex items-center gap-2">
        <p class="text-gray-100 grow w-full">{plotter.label}</p>

        <input
          type="number"
          value={plotter.width_cm}
          onchange={(e) => handleChange(plotter, "width_cm", e.currentTarget.value)}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-700 focus:border-green-500"
        />

        <input
          type="number"
          step="0.1"
          value={plotter.price}
          onchange={(e) => handleChange(plotter, "price", e.currentTarget.value)}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-700 focus:border-green-500"
        />

        <input
          type="number"
          step="0.1"
          value={plotter.min_price}
          onchange={(e) => handleChange(plotter, "min_price", e.currentTarget.value)}
          class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-700 focus:border-green-500"
        />

        <button
          onclick={() => handleDelete(plotter)}
          class="w-8 h-8 flex items-center justify-center rounded text-red-400 hover:bg-red-950 transition-colors"
          title="Eliminar"
        >
          ✕
        </button>
      </li>
    {/each}
  </ul>

  <div class="flex flex-col gap-2 px-4 pb-4">
    <p class="text-sm text-gray-500">Añadir nuevo</p>
    <div class="flex items-center gap-2">
      <input
        type="text"
        placeholder="Nombre"
        bind:value={newLabel}
        class="outline-none bg-gray-950 text-gray-100 p-2 grow w-full rounded-md border border-gray-700 focus:border-green-500"
      />
      <input
        type="number"
        placeholder="Ancho"
        bind:value={newWidth}
        class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-700 focus:border-green-500"
      />
      <input
        type="number"
        step="0.1"
        placeholder="Precio"
        bind:value={newPrice}
        class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-700 focus:border-green-500"
      />
      <input
        type="number"
        step="0.1"
        placeholder="P. Mín."
        bind:value={newMinPrice}
        class="outline-none bg-gray-950 text-gray-100 p-2 grow w-1/4 rounded-md border border-gray-700 focus:border-green-500"
      />
      <button
        onclick={handleCreate}
        disabled={creating}
        class="w-8 h-8 flex items-center justify-center rounded bg-green-700 text-white hover:bg-green-600 disabled:opacity-50 transition-colors"
        title="Añadir"
      >
        +
      </button>
    </div>
    {#if error}
      <p class="text-red-400 text-sm">{error}</p>
    {/if}
  </div>
</details>
<script lang="ts">
  import OptionsPaper from "@/components/OptionsPaper.svelte";
  import OptionsPlotter from "@/components/OptionsPlotter.svelte";
  import OptionsTshirt from "@/components/OptionsTshirt.svelte";
  import OptionsVars from "@/components/OptionsVars.svelte";

  let { papers: initialPapers, plotters: initialPlotters, tshirts: initialTshirts, vars } = $props();

  let papers = $state(initialPapers);
  let plotters = $state(initialPlotters);
  let tshirts = $state(initialTshirts);

  async function reloadPapers() {
    const res = await fetch("/api/papers");
    papers = await res.json();
  }

  async function reloadPlotters() {
    const res = await fetch("/api/plotters");
    plotters = await res.json();
  }

  async function reloadTshirts() {
    const res = await fetch("/api/tshirts");
    tshirts = await res.json();
  }

  async function savePaper(paper: any) {
    await fetch("/api/papers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paper),
    });
  }

  async function createPaper(data: any) {
    const res = await fetch("/api/papers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) await reloadPapers();
    return res;
  }

  async function deletePaper(id: string) {
    const res = await fetch("/api/papers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) await reloadPapers();
    return res;
  }

  async function savePlotter(plotter: any) {
    await fetch("/api/plotters", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plotter),
    });
  }

  async function createPlotter(data: any) {
    const res = await fetch("/api/plotters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) await reloadPlotters();
    return res;
  }

  async function deletePlotter(id: string) {
    const res = await fetch("/api/plotters", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) await reloadPlotters();
    return res;
  }

  async function saveTshirt(tshirt: any) {
    await fetch("/api/tshirts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tshirt),
    });
  }

  async function createTshirt(data: any) {
    const res = await fetch("/api/tshirts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) await reloadTshirts();
    return res;
  }

  async function deleteTshirt(id: string) {
    const res = await fetch("/api/tshirts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) await reloadTshirts();
    return res;
  }

  async function saveVars(varsData: any) {
    await fetch("/api/vars", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(varsData),
    });
  }
</script>

<div class="flex flex-col gap-2">
  <OptionsPaper {papers} onSave={savePaper} onCreate={createPaper} onDelete={deletePaper} />
  <OptionsPlotter {plotters} onSave={savePlotter} onCreate={createPlotter} onDelete={deletePlotter} />
  <OptionsTshirt {tshirts} onSave={saveTshirt} onCreate={createTshirt} onDelete={deleteTshirt} />
  <OptionsVars {vars} onSave={saveVars} />
</div>
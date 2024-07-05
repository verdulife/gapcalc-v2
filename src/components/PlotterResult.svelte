<script>
  import { Plotters } from "@/lib/stores";
  import { formatPrice } from "@/lib/utils";
  import { PLOTTER_ADDED_CM, PLOTTER_LOSS_CM } from "@/lib/consts";

  export let plotter_value, plotter_height;

  $: plotter = $Plotters.find((p) => p.id === plotter_value);
  $: price = plotter.price * ((plotter_height + PLOTTER_ADDED_CM) / 100);
</script>

<div class="flex flex-col">
  <small class="text-gray-500">
    Precio metro lineal {formatPrice(plotter.price)}
  </small>
  <small class="text-gray-500">
    Usado {plotter.width_cm}x{plotter_height +
      PLOTTER_ADDED_CM}cm
  </small>

  <output class="mt-4 text-2xl bg-gray-950 py-2 px-4">
    {formatPrice(price)}
  </output>
</div>

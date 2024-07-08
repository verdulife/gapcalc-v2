<script>
  import { Plotters } from "@/lib/stores";
  import { formatPrice } from "@/lib/utils";
  import { PLOTTER_ADDED_CM } from "@/lib/consts";

  export let plotter_value, height_value;

  $: height_value = parseInt(height_value);
  $: plotter = $Plotters.find((p) => p.id === plotter_value);
  $: price = plotter.price * ((height_value + PLOTTER_ADDED_CM) / 100);
</script>

<div class="flex flex-col items-end text-right">
  <small class="text-gray-500">
    Precio metro lineal {formatPrice(plotter.price)}
  </small>
  <small class="text-gray-500">
    Usado {plotter.width_cm}x{height_value + PLOTTER_ADDED_CM}cm
  </small>

  <output class="text-6xl">
    {formatPrice(price)}
  </output>
</div>

<script>
  import { Plotters } from "@/lib/stores";
  import { formatPrice, textToClipboard } from "@/lib/utils";
  import { PLOTTER_ADDED_CM, EXPRESS_MULIPLIER } from "@/lib/consts";

  export let plotter_value, height_value, express_value;

  let copied = false;

  $: height_value = parseInt(height_value);
  $: plotter = $Plotters.find((p) => p.id === plotter_value);
  $: express = express_value;
  $: price = plotter.price * ((height_value + PLOTTER_ADDED_CM) / 100);

  $: if (express) {
    price =
      plotter.price *
      ((height_value + PLOTTER_ADDED_CM) / 100) *
      EXPRESS_MULIPLIER;
  } else {
    price = plotter.price * ((height_value + PLOTTER_ADDED_CM) / 100);
  }

  async function handleCopy(value) {
    const success = await textToClipboard(value);
    if (success) {
      copied = value;
      setTimeout(() => {
        copied = false;
      }, 500);
    } else {
      copied = false;
    }
  }
</script>

<button
  class="flex flex-col text-right items-end px-6 pt-6"
  on:click={() => handleCopy(formatPrice(price))}
>
  <span class="text-gray-500">
    {plotter.width_cm}x{height_value + PLOTTER_ADDED_CM}cm
  </span>

  <output class="text-6xl {copied && '!text-green-300'}">
    {formatPrice(price)}
  </output>
</button>

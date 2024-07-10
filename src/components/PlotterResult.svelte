<script>
  import { Plotters } from "@/lib/stores";
  import { formatPrice, textToClipboard } from "@/lib/utils";
  import {
    PLOTTER_ADDED_CM,
    EXPRESS_MULIPLIER,
    WIDTH_LOSS_CM,
    SEPARATOR_CM,
  } from "@/lib/consts";

  export let plotter_value,
    width_value,
    height_value,
    express_value,
    amount_value;
  let copied = false;
  let rest_space = 1;

  $: currentPlotter = $Plotters.find((p) => p.id === plotter_value);
  $: express = express_value;
  $: currentWidth = +width_value || currentPlotter?.width_cm || 0;
  $: currentHeight = +height_value || 0;

  $: calcPrice = () => {
    const usable_width = currentPlotter.width_cm - WIDTH_LOSS_CM;
    const print_width =
      +amount_value > 1
        ? currentWidth + (SEPARATOR_CM * +amount_value - 1)
        : currentWidth;
    const per_width = Math.floor(usable_width / print_width);
    const rows = Math.ceil(+amount_value / per_width);

    // AQUI ESTOY
    const rest_width = usable_width - currentWidth;
    rest_space = rest_width / per_width;
    // AQUI ESTOY

    const usedHeight = currentHeight * rows;
    let price = currentPlotter.price * ((usedHeight + PLOTTER_ADDED_CM) / 100);

    if (express) {
      price = price * EXPRESS_MULIPLIER;
    }

    return price;
  };

  async function handleCopy(value) {
    const success = await textToClipboard(value);
    if (success) {
      copied = value;
      setTimeout(() => (copied = false), 500);
    } else {
      copied = false;
    }
  }
</script>

<button
  class="flex flex-col text-right items-end px-6 pt-6"
  on:click={() => handleCopy(formatPrice(calcPrice()))}
>
  <output class="text-6xl {copied && '!text-green-300'}">
    {formatPrice(calcPrice())}
  </output>

  <div>
    <span class="text-gray-500">
      Usando {currentPlotter.width_cm}x{currentHeight + PLOTTER_ADDED_CM}cm
    </span>
    {#if rest_space > 0}
      <span class="text-gray-500">
        <span class="text-gray-500"> - Entra {rest_space} más</span>
      </span>
    {/if}
  </div>
</button>

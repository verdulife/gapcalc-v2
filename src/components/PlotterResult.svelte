<script>
  import { Plotters } from "@/lib/stores";
  import { formatPrice, textToClipboard } from "@/lib/utils";
  import {
    PLOTTER_ADDED_CM,
    EXPRESS_MULIPLIER,
    WIDTH_LOSS_CM,
    SEPARATOR_CM,
    MINIMUM_HEIGHT,
  } from "@/lib/consts";

  export let plotter_value,
    width_value,
    height_value,
    express_value,
    amount_value;

  let copied = false;
  let rest_space = 1;
  let usedHeight = 0;

  $: currentPlotter = $Plotters.find((p) => p.id === plotter_value);
  $: express = express_value;
  $: currentWidth = +width_value || currentPlotter?.width_cm || 0;
  $: currentHeight = +height_value || 0;

  $: calcPrice = () => {
    const printable_width = currentPlotter?.width_cm - WIDTH_LOSS_CM || 0;
    const item_width =
      +amount_value > 1 ? currentWidth + SEPARATOR_CM : currentWidth;
    const items_per_width = Math.floor(printable_width / item_width) || 1;
    const rows = Math.ceil(+amount_value / items_per_width);

    rest_space =
      +amount_value % items_per_width === 0
        ? 0
        : Math.abs((+amount_value % items_per_width) - items_per_width);

    usedHeight =
      currentHeight * rows > MINIMUM_HEIGHT
        ? currentHeight * rows
        : MINIMUM_HEIGHT;

    let price = currentPlotter.price * ((usedHeight + PLOTTER_ADDED_CM) / 100);

    if (express) {
      price = price * EXPRESS_MULIPLIER;
    }

    return price;
  };

  async function handleCopy(value) {
    const cleanValue = value.replace("€", "").trim();
    const success = await textToClipboard(cleanValue);

    if (success) {
      copied = value;
      setTimeout(() => (copied = false), 500);
    } else {
      copied = false;
    }
  }
</script>

<button
  class="flex flex-col text-right items-end p-6 gap-2 bg-gray-50 dark:bg-gray-950 [text-shadow:0_0_10px_rgba(255,255,255,0.6)]"
  on:click={() => handleCopy(formatPrice(calcPrice()))}
>
  <output class="text-5xl {copied && '!text-green-300'}">
    {formatPrice(calcPrice())}
  </output>

  <div class="text-gray-500 dark:text-gray-300 text-lg">
    <span>
      Total {currentPlotter.width_cm}x{usedHeight + PLOTTER_ADDED_CM}cm
    </span>
    {#if rest_space > 0}
      <span>
        - Entran {rest_space} más por fila
      </span>
    {/if}
  </div>
</button>

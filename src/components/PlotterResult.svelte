<script lang="ts">
  import { PLOTTER_ADDED_CM, WIDTH_LOSS_CM, SEPARATOR_CM, MINIMUM_HEIGHT } from "@/lib/consts";
  import { formatPrice, textToClipboard } from "@/lib/utils";

  interface Props {
    vars: any;
    plotters: any[];
    plotter_value: string;
    width_value: string;
    height_value: string;
    express_value: boolean;
    amount_value: string;
  }

  let { vars, plotters, plotter_value, width_value, height_value, express_value, amount_value }: Props = $props();

  let copied = $state(false);
  let timer = $state<any>(null);

  let currentPlotter = $derived(plotters.find((p: any) => p.id === plotter_value) ?? plotters[0]);
  let currentWidth = $derived(+width_value || currentPlotter?.width_cm || 0);
  let currentHeight = $derived(+height_value || 0);

  let rows = $derived.by(() => {
    const printable_width = currentPlotter?.width_cm - WIDTH_LOSS_CM || 0;
    const item_width = +amount_value > 1 ? currentWidth + SEPARATOR_CM : currentWidth;
    const items_per_width = Math.floor(printable_width / item_width) || 1;
    return Math.ceil(+amount_value / items_per_width);
  });

  let usedH = $derived(currentHeight * rows > MINIMUM_HEIGHT ? currentHeight * rows : MINIMUM_HEIGHT);
  let rest_space = $derived.by(() => {
    const printable_width = currentPlotter?.width_cm - WIDTH_LOSS_CM || 0;
    const item_width = +amount_value > 1 ? currentWidth + SEPARATOR_CM : currentWidth;
    const items_per_width = Math.floor(printable_width / item_width) || 1;
    return +amount_value % items_per_width === 0 ? 0 : Math.abs((+amount_value % items_per_width) - items_per_width);
  });
  let price = $derived.by(() => {
    const plotter_price = (currentPlotter?.price ?? 0) * ((usedH + PLOTTER_ADDED_CM) / 100);
    const base = express_value ? plotter_price * (vars?.EXPRESS_MULIPLIER ?? 1) : plotter_price;
    return Math.max(currentPlotter?.min_price ?? 16, base);
  });
  let formatted = $derived(formatPrice(price));

  $effect(() => {
    return () => { if (timer) clearTimeout(timer); };
  });

  async function handleCopy() {
    if (timer) clearTimeout(timer);
    const success = await textToClipboard(formatted);
    copied = success;
    timer = setTimeout(() => (copied = false), 500);
  }
</script>

<button
  class="flex flex-col text-right items-end p-6 gap-2 bg-gray-50 dark:bg-gray-950 [text-shadow:0_0_10px_rgba(255,255,255,0.6)]"
  onclick={handleCopy}
>
  <output class="text-5xl {copied ? '!text-green-300' : ''}">{formatted}</output>

  <div class="text-gray-500 dark:text-gray-300 text-lg">
    <span>Total {currentPlotter?.width_cm ?? 0}x{usedH + PLOTTER_ADDED_CM}cm</span>
    {#if rest_space > 0}
      <span>- Entran {rest_space} más por fila</span>
    {/if}
  </div>
</button>
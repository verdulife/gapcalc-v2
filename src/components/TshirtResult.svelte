<script lang="ts">
  import { formatPrice, textToClipboard } from "@/lib/utils";

  interface Props {
    tshirts: any[];
    tshirt_value: boolean;
    front_value: string;
    back_value: string;
    vars: any;
  }

  let { tshirts, tshirt_value, front_value, back_value, vars }: Props = $props();

  let copied = $state(false);
  let timer = $state<any>(null);

  let currentFront = $derived(tshirts.find((t: any) => t.id === front_value));
  let currentBack = $derived(tshirts.find((t: any) => t.id === back_value));
  let basePrice = $derived(tshirt_value ? (vars?.TSHIRT_PRICE ?? 0) : 0);
  let price = $derived(basePrice + (currentFront?.price ?? 0) + (currentBack?.price ?? 0));
  let formatted = $derived(formatPrice(price));

  $effect(() => {
    return () => { if (timer) clearTimeout(timer); };
  });

  async function handleCopy() {
    if (timer) clearTimeout(timer);
    const success = await textToClipboard(formatted.replace("€", "").trim());
    copied = success;
    timer = setTimeout(() => (copied = false), 500);
  }
</script>

<button
  class="flex flex-col text-right items-end px-6 py-10 gap-2 bg-gray-50 dark:bg-gray-950 [text-shadow:0_0_10px_rgba(255,255,255,0.6)]"
  onclick={handleCopy}
>
  <output class="text-5xl {copied ? '!text-green-300' : ''}">{formatted}</output>
</button>
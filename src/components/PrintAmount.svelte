<script lang="ts">
  import { DISPLAY_AMOUNTS, SCALE_EACH } from "@/lib/consts";
  import { formatPrice, textToClipboard } from "@/lib/utils";
  import InputUnits from "./InputUnits.svelte";

  interface Props {
    vars: any;
    papers: any[];
    prints: any[];
    print_value: string;
    faces_value: number;
    paper_value: string;
    express_value: boolean;
  }

  let { vars, papers, prints, print_value, faces_value, paper_value, express_value }: Props = $props();

  let copied = $state(false);
  let timer = $state<any>(null);
  let amount_filter = $state("");

  let paper = $derived(papers.find((p: any) => p.id === paper_value));
  let print = $derived(prints.find((p: any) => p.id === print_value));
  let per_sheet = $derived(Math.max(1, print?.per_sheet ?? 1));
  let filtered_amounts = $derived(
    DISPLAY_AMOUNTS.filter((amount) =>
      amount_filter ? amount.toString().includes(amount_filter) : true
    )
  );

  let calcSheets = $derived((amount: number) => Math.ceil(amount / per_sheet));

  function calcPrice(amount: number, paper: any, faces: number, express: boolean) {
    const sh = calcSheets(amount);
    const paperPrice = paper?.price ?? 0;
    let p_price = faces === 1 ? paperPrice : paperPrice + (vars?.SECOND_FACE_PRICE ?? 0);
    const each_scale = Math.floor(sh / SCALE_EACH);
    for (let s = 0; s < each_scale; s++) p_price = p_price - (vars?.SCALE_SUBSTRACT_PRICE ?? 0);
    let price = sh * p_price + (vars?.WORK_PRICE ?? 0);
    if (print?.id === "tarjetas_visita") price = price + (vars?.WORK_PRICE_CARDS ?? 0);
    if (express) price = price * (vars?.EXPRESS_MULIPLIER ?? 1);
    return { price, formatted: formatPrice(price), sheets: sh };
  }

  $effect(() => {
    return () => { if (timer) clearTimeout(timer); };
  });

  async function handleCopy(value: string) {
    if (timer) clearTimeout(timer);
    const cleanValue = value.replace("€", "").trim();
    const success = await textToClipboard(cleanValue);
    if (success) {
      copied = true;
      timer = setTimeout(() => (copied = false), 500);
    }
  }
</script>

<div class="flex flex-col gap-2 bg-gray-50 dark:bg-gray-950 p-6">
  <InputUnits bind:value={amount_filter} units="🔎" reverse />

  <ul class="flex flex-wrap w-full">
    {#each filtered_amounts as amount}
      {@const result = (() => { const p = calcPrice(amount, paper, faces_value, express_value); return { price: p.price, formatted: formatPrice(p.price), sheets: calcSheets(amount) }; })()}
      <li class="w-full py-4 px-2 border-b border-gray-300 dark:border-gray-800 {copied === result.formatted ? '!text-green-300' : ''}">
        <button
          class="flex justify-between items-center w-full [text-shadow:0_0_7px_rgba(255,255,255,0.6)]"
          onclick={() => handleCopy(result.formatted)}
        >
          <p class="font-medium">{amount}u ({result.sheets} hojas)</p>
          <p class="px-2 py-1 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 rounded-md transition-colors {copied === result.formatted ? '!text-green-300' : ''}">
            {result.formatted}
          </p>
        </button>
      </li>
    {/each}
  </ul>
</div>
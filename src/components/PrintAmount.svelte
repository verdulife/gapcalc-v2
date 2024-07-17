<script>
  import { DISPLAY_AMOUNTS, SCALE_EACH } from "@/lib/consts";
  import { formatPrice, textToClipboard } from "@/lib/utils";
  import InputUnits from "./InputUnits.svelte";

  export let vars,
    papers,
    prints,
    print_value,
    faces_value,
    paper_value,
    express_value;

  const {
    SECOND_FACE_PRICE,
    WORK_PRICE,
    WORK_PRICE_CARDS,
    EXPRESS_MULIPLIER,
    SCALE_SUBSTRACT_PRICE,
  } = vars;

  let copied = false;

  $: paper = papers.find((p) => p.id === paper_value);
  $: print = prints.find((p) => p.id === print_value);
  $: per_sheet = print?.per_sheet || 0;
  $: express = express_value;

  let amount_filter;
  $: filtered_amounts = DISPLAY_AMOUNTS.filter((amount) => {
    if (!amount_filter) return true;
    return amount.toString().includes(amount_filter);
  });

  function calcSheets(amount, per_sheet) {
    return Math.ceil(amount / per_sheet);
  }

  function calcPrice(amount, paper, faces_value, per_sheet, express) {
    const sheets = calcSheets(amount, per_sheet);

    let paper_price =
      faces_value === 1 ? paper.price : paper.price + SECOND_FACE_PRICE;
    let each_scale = Math.floor(sheets / SCALE_EACH);
    for (let s = 0; s < each_scale; s++) {
      paper_price = paper_price - SCALE_SUBSTRACT_PRICE;
    }

    let price = sheets * paper_price + WORK_PRICE;
    if (print.id === "tarjetas_visita") price = price + WORK_PRICE_CARDS;
    if (express) price = price * EXPRESS_MULIPLIER;

    return formatPrice(price);
  }

  async function handleCopy(value) {
    const cleanValue = value.replace("€", "").trim();
    const success = await textToClipboard(cleanValue);

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

<div class="flex flex-col gap-2 bg-gray-50 dark:bg-gray-950 p-6">
  <InputUnits bind:value={amount_filter} units="🔎" reverse></InputUnits>

  <ul class="flex flex-wrap w-full">
    {#each filtered_amounts as amount}
      <li
        class="
          w-full py-4 px-2 border-b border-gray-300 dark:border-gray-800
          {copied ===
          calcPrice(amount, paper, faces_value, per_sheet, express) &&
          '!text-green-300'}
        "
      >
        <button
          class="flex justify-between items-center w-full [text-shadow:0_0_7px_rgba(255,255,255,0.6)]"
          on:click={() =>
            handleCopy(calcPrice(amount, paper, faces_value, per_sheet))}
        >
          <p class="font-medium">
            {amount}u ({calcSheets(amount, per_sheet)} hojas)
          </p>
          <p
            class="
              px-2 py-1 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 rounded-md transition-colors
              {copied ===
              calcPrice(amount, paper, faces_value, per_sheet, express) &&
              '!text-green-300'}
            "
          >
            {calcPrice(amount, paper, faces_value, per_sheet, express)}
          </p>
        </button>
      </li>
    {/each}
  </ul>
</div>

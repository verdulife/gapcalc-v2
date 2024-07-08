<script>
  import { WORK_PRICE, DISPLAY_AMOUNTS } from "@/lib/consts";
  import { Prints, Papers } from "@/lib/stores";
  import { formatPrice } from "@/lib/utils";

  export let print_value, faces_value, paper_value;

  $: paper = $Papers.find((p) => p.id === paper_value);
  $: print = $Prints.find((p) => p.id === print_value);
  $: per_sheet = print.per_sheet;

  let amount_filter;
  $: filtered_amounts = DISPLAY_AMOUNTS.filter((amount) => {
    if (!amount_filter) return true;
    return amount.toString().includes(amount_filter);
  });

  function calcSheets(amount, per_sheet) {
    return Math.ceil(amount / per_sheet);
  }

  function calcPrice(amount, paper, faces_value, per_sheet) {
    const sheets = calcSheets(amount, per_sheet);
    return formatPrice(sheets * paper.price[faces_value - 1] + WORK_PRICE);
  }
</script>

<div class="flex flex-col gap-2">
  <input
    type="search"
    bind:value={amount_filter}
    placeholder="🔎 Buscar cantidad"
    class="w-full p-4 bg-gray-300 dark:bg-gray-800 border border-gray-400 dark:border-gray-700 rounded-md outline-none placeholder-gray-600"
  />

  <ul class="flex flex-wrap w-full">
    {#each filtered_amounts as amount}
      <li
        class="flex justify-between gap-2 w-full py-4 border-b border-gray-300 dark:border-gray-800"
      >
        <p>{amount}u ({calcSheets(amount, per_sheet)} hojas)</p>
        <p class="px-2 py-1 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 text-sm rounded-md">
          {calcPrice(amount, paper, faces_value, per_sheet)}
        </p>
      </li>
    {/each}
  </ul>
</div>

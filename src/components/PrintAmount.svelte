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
    class="w-full py-2 bg-transparent border-b border-gray-800 outline-none placeholder-gray-600"
  />

  <ul class="flex flex-wrap w-full gap-2">
    {#each filtered_amounts as amount}
      <li
        class="flex justify-between gap-2 w-full border-b border-gray-800 py-4"
      >
        <p>{amount}u ({calcSheets(amount, per_sheet)} hojas)</p>
        <p>{calcPrice(amount, paper, faces_value, per_sheet)}</p>
      </li>
    {/each}
  </ul>
</div>

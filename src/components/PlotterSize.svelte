<script>
  import { Plotters } from "@/lib/stores";
  import { ALLOWED_KEYS } from "@/lib/consts";
  import NumPad from "./NumPad.svelte";

  export let height_value, plotter_value;
  $: currentPlotter = $Plotters.find((p) => p.id === plotter_value);

  function numHandle(ev) {
    const { key } = ev;
    const { textContent } = ev.target;
    let value;

    if (!key) value = textContent;
    else value = key;
    if (!ALLOWED_KEYS.includes(value)) return;

    height_value = height_value.toString();
    if (value === "=" || value === "Enter") {
      height_value = eval(height_value);
    } else if (value === "DEL" || value === "Backspace") {
      height_value = height_value
        .toString()
        .substring(0, height_value.length - 1);
    } else if (value === "AC" || value === "Escape") {
      height_value = "";
    } else {
      height_value === "0" ? (height_value = value) : (height_value += value);
    }

    height_value = !height_value ? 0 : height_value;
  }
</script>

<svelte:window on:keydown={numHandle} />

<section class="flex flex-col gap-4 h-full">
  <div class="flex items-center gap-4 px-6">
    <input
      type="text"
      bind:value={currentPlotter.width_cm}
      disabled
      class="w-full outline-none p-4 bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-md text-right"
    />
    <span>X</span>
    <input
      type="text"
      bind:value={height_value}
      disabled
      class="w-full outline-none p-4 bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-md text-right"
    />
  </div>

  <div class="flex flex-col h-full">
    <div class="grid grid-cols-3 user-select-none grow">
      <NumPad {numHandle}>AC</NumPad>
      <NumPad {numHandle}>DEL</NumPad>
      <NumPad {numHandle}>/</NumPad>
    </div>
    <div class="grid grid-cols-4 user-select-none grow">
      <NumPad {numHandle}>7</NumPad>
      <NumPad {numHandle}>8</NumPad>
      <NumPad {numHandle}>9</NumPad>
      <NumPad {numHandle}>*</NumPad>
    </div>
    <div class="grid grid-cols-4 user-select-none grow">
      <NumPad {numHandle}>4</NumPad>
      <NumPad {numHandle}>5</NumPad>
      <NumPad {numHandle}>6</NumPad>
      <NumPad {numHandle}>-</NumPad>
    </div>
    <div class="grid grid-cols-4 user-select-none grow">
      <NumPad {numHandle}>1</NumPad>
      <NumPad {numHandle}>2</NumPad>
      <NumPad {numHandle}>3</NumPad>
      <NumPad {numHandle}>+</NumPad>
    </div>
    <div class="grid grid-cols-3 user-select-none grow">
      <NumPad {numHandle}>0</NumPad>
      <NumPad {numHandle}>.</NumPad>
      <NumPad {numHandle}>=</NumPad>
    </div>
  </div>
</section>

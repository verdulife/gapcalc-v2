<script>
  import { ALLOWED_KEYS } from "@/lib/consts";
  import NumPad from "./NumPad.svelte";

  export let height_value;

  let numHandle = (ev) => {
    const { key } = ev;
    const { textContent } = ev.target;

    let value;
    if (!key) value = textContent;
    else value = key;

    if (!ALLOWED_KEYS.includes(value)) return;

    height_value = height_value.toString();

    if (value === "=" || value === "Enter") height_value = eval(height_value);
    else if (value === "DEL" || value === "Backspace")
      height_value = height_value
        .toString()
        .substring(0, height_value.length - 1);
    else if (value === "AC" || value === "Escape") height_value = "";
    else
      height_value === "0" ? (height_value = value) : (height_value += value);

    height_value = !height_value ? 0 : height_value;
  };
</script>

<svelte:window on:keydown={numHandle} />

<section class="flex flex-col gap-1">
  <input
    type="text"
    bind:value={height_value}
    disabled
    class="w-full outline-none p-4 bg-gray-700 border border-gray-600 rounded-md text-right"
  />

  <div class="flex flex-col gap-1">
    <div class="grid grid-cols-3 gap-1 user-select-none">
      <NumPad bind:numHandle>AC</NumPad>
      <NumPad bind:numHandle>DEL</NumPad>
      <NumPad bind:numHandle>/</NumPad>
    </div>
    <div class="grid grid-cols-4 gap-1 user-select-none">
      <NumPad bind:numHandle>7</NumPad>
      <NumPad bind:numHandle>8</NumPad>
      <NumPad bind:numHandle>9</NumPad>
      <NumPad bind:numHandle>*</NumPad>
    </div>
    <div class="grid grid-cols-4 gap-1 user-select-none">
      <NumPad bind:numHandle>4</NumPad>
      <NumPad bind:numHandle>5</NumPad>
      <NumPad bind:numHandle>6</NumPad>
      <NumPad bind:numHandle>-</NumPad>
    </div>
    <div class="grid grid-cols-4 gap-1 user-select-none">
      <NumPad bind:numHandle>1</NumPad>
      <NumPad bind:numHandle>2</NumPad>
      <NumPad bind:numHandle>3</NumPad>
      <NumPad bind:numHandle>+</NumPad>
    </div>
    <div class="grid grid-cols-3 gap-1 user-select-none">
      <NumPad bind:numHandle>0</NumPad>
      <NumPad bind:numHandle>.</NumPad>
      <NumPad bind:numHandle>=</NumPad>
    </div>
  </div>
</section>

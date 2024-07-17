<script>
  import { formatPrice, textToClipboard } from "@/lib/utils";

  export let vars, tshirts, tshirt_value, front_value, back_value;

  const { TSHIRT_PRICE } = vars;
  let copied = false;

  $: currentFront = tshirts.find((tshirt) => tshirt.id === front_value);
  $: currentBack = tshirts.find((tshirt) => tshirt.id === back_value);
  $: basePrice = tshirt_value ? TSHIRT_PRICE : 0;

  $: calcPrice = () => {
    return basePrice + currentFront.price + currentBack.price;
  };

  function handleCopy(value) {
    const cleanValue = value.replace("€", "").trim();
    const success = textToClipboard(cleanValue);

    if (success) {
      copied = value;
      setTimeout(() => (copied = false), 500);
    } else {
      copied = false;
    }
  }
</script>

<button
  class="flex flex-col text-right items-end px-6 py-10 gap-2 bg-gray-50 dark:bg-gray-950 [text-shadow:0_0_10px_rgba(255,255,255,0.6)]"
  on:click={() => handleCopy(formatPrice(calcPrice()))}
>
  <output class="text-5xl {copied && '!text-green-300'}">
    {formatPrice(calcPrice())}
  </output>
</button>

<script lang="ts">
  interface Props {
    tshirt_value?: $bindable<boolean>;
  }

  let { tshirt_value = $bindable(true) }: Props = $props();
</script>

<fieldset class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border-0">
  <legend class="sr-only">Tipo de camiseta</legend>
  <div class="grid grid-cols-2 w-full">
    {#each [true, false] as value}
      <label class="w-full flex items-center justify-center p-2 text-center rounded-lg font-medium transition-colors cursor-pointer {tshirt_value === value ? 'bg-green-300 text-gray-700' : ''}">
        <input
          type="radio"
          name="tshirt"
          bind:group={tshirt_value}
          {value}
          class="appearance-none"
        />
        <span class="capitalize text-sm">{value ? "Camiseta incluida" : "Solo planchado"}</span>
      </label>
    {/each}
  </div>
</fieldset>
<script lang="ts">
  interface Props {
    express_value?: $bindable<boolean>;
  }

  let { express_value = $bindable(false) }: Props = $props();
</script>

<fieldset class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border-0">
  <legend class="sr-only">Modo de entrega</legend>
  <div class="grid grid-cols-2 w-full">
    {#each [false, true] as value}
      <label class="w-full flex items-center justify-center p-2 text-center rounded-lg font-medium transition-colors cursor-pointer {express_value === value ? 'bg-green-300 text-gray-700' : ''}">
        <input
          type="radio"
          name="express"
          bind:group={express_value}
          {value}
          class="appearance-none"
        />
        <span class="capitalize text-sm">{value ? "Urgente" : "Normal"}</span>
      </label>
    {/each}
  </div>
</fieldset>
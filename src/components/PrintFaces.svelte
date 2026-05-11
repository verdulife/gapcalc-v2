<script lang="ts">
  interface Props {
    faces_value?: $bindable<number>;
  }

  let { faces_value = $bindable(2) }: Props = $props();
</script>

<fieldset class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border-0">
  <legend class="sr-only">Número de caras</legend>
  <div class="grid grid-cols-2 w-full">
    {#each [1, 2] as face}
      <label class="w-full flex items-center justify-center p-2 text-center rounded-lg font-medium transition-colors cursor-pointer {faces_value === face ? 'bg-gradient-to-tr from-green-400 to-green-300 text-gray-700' : ''}">
        <input
          type="radio"
          name="faces"
          bind:group={faces_value}
          value={face}
          class="appearance-none"
        />
        <span class="capitalize text-sm">{face} cara{face > 1 ? "s" : ""}</span>
      </label>
    {/each}
  </div>
</fieldset>
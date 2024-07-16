<script>
  import { formatPlural } from "@/lib/utils";

  export let faces_value;
  const faces = [1, 2];
</script>

<section class="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
  <div class="grid grid-cols-2 w-full">
    {#each faces as face}
      <label
        class="
          w-full flex items-center justify-center
          text-center rounded-lg font-medium
          transition-colors
          {faces_value === face && 'bg-gradient-to-tr from-green-400 to-green-300 text-gray-700'}
        "
      >
        <input
          type="radio"
          bind:group={faces_value}
          value={face}
          class="appearance-none"
        />
        <span class="capitalize text-sm">{formatPlural(face, "cara")}</span>
      </label>
    {/each}
  </div>
</section>

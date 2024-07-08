<script>
  import { formatPlural } from "@/lib/utils";

  export let faces_value;
  const faces = [1, 2];
</script>

<details class="flex flex-col gap-2" name="prints">
  <summary class="font-bold text-lg">{formatPlural(faces_value, "cara")}</summary>

  <div class="grid grid-cols-2 w-full gap-2 mt-2">
    {#each faces as face}
      <label
        class="
          w-full flex items-center justify-center
          p-4 text-center rounded-md border border-gray-600
          transition-colors
          {faces_value === face ? 'bg-green-300 text-black' : 'bg-gray-700'}
        "
      >
        <input
          type="radio"
          name="caras"
          bind:group={faces_value}
          value={face}
          class="appearance-none"
        />
        <span class="capitalize">{formatPlural(face, "cara")}</span>
      </label>
    {/each}
  </div>
</details>

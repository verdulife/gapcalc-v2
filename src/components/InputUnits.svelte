<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  interface Props {
    value?: string;
    units?: string;
    reverse?: boolean;
  }

  let { value = $bindable(""), units = "", reverse = false }: Props = $props();
</script>

<label class="w-full flex bg-gray-300 dark:bg-gray-950 border border-gray-400 dark:border-gray-800 rounded-md overflow-hidden {reverse ? 'flex-row-reverse' : ''}">
  <input
    type="text"
    bind:value
    class="w-full grow outline-none p-4 text-right bg-transparent {reverse ? '!text-left' : ''}"
    aria-label={units || "input"}
  />
  <span class="grow bg-gray-900 flex items-center justify-center p-2 uppercase text-xs w-1/4">{units}</span>
</label>
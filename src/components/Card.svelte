<script lang="ts">
  import Card from "@/components/Card.svelte";

  interface Props {
    current: { id: string; label: string };
    value?: string;
  }

  let { current, value = $bindable("") }: Props = $props();
</script>

<label class="w-full flex items-end aspect-[4/3] font-medium leading-5 text-sm p-2 rounded-lg border cursor-pointer transition-colors shadow shadow-black/50 {value === current.id ? 'bg-gradient-to-tr from-green-400 to-green-300 text-gray-700 border-green-400' : 'bg-gradient-to-tr from-gray-400 to-gray-300 dark:from-gray-800 dark:to-gray-700 dark:border-gray-700'}">
  <input
    type="radio"
    bind:group={value}
    value={current.id}
    class="appearance-none"
  />
  <span>{current.label}</span>
</label>
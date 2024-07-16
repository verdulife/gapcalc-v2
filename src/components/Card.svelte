<script>
  export let value, current;
</script>

<label
  class="
    w-full flex items-end aspect-[4/3] font-medium leading-5 text-sm
    p-2 rounded-lg border border-gray-300 dark:border-gray-700
    transition-colors shadow shadow-black/50
    {value === current.id
    ? 'bg-gradient-to-tr from-green-400 to-green-300 text-gray-700'
    : 'bg-gradient-to-tr from-gray-400 to-gray-300 dark:from-gray-800 dark:to-gray-700'} : '
  "
>
  <input
    type="radio"
    bind:group={value}
    value={current.id}
    class="appearance-none"
  />
  <span>{current.label}</span>
</label>

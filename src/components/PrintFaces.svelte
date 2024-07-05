<script>
  export let faces_value;
</script>

<div class="flex w-full gap-2">
  <label
    class="px-4 py-2 grow text-center {faces_value === 1
      ? 'bg-blue-500'
      : 'bg-gray-950'}"
  >
    <input
      type="radio"
      name="caras"
      bind:group={faces_value}
      value={1}
      class="appearance-none"
    />
    <span>1 cara</span>
  </label>

  <label
    class="px-4 py-2 grow text-center {faces_value === 2
      ? 'bg-blue-500'
      : 'bg-gray-950'}"
  >
    <input
      type="radio"
      name="caras"
      bind:group={faces_value}
      value={2}
      class="appearance-none"
    />
    <span>2 cara</span>
  </label>
</div>

<script>
  import InputUnits from "@/components/InputUnits.svelte";

  export let width_value, height_value;
</script>

<section class="flex gap-2 px-6">
  <InputUnits bind:value={width_value} units="cm" />
  <InputUnits bind:value={height_value} units="cm" />
</section>

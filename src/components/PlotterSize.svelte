<script lang="ts">
  import InputUnits from "@/components/InputUnits.svelte";

  interface Props {
    width_value?: $bindable<string>;
    height_value?: $bindable<string>;
  }

  let { width_value = $bindable(""), height_value = $bindable("") }: Props = $props();
</script>

<section class="flex gap-2 px-6">
  <InputUnits bind:value={width_value} units="cm" />
  <InputUnits bind:value={height_value} units="cm" />
</section>
<script setup lang="ts">
  import BaseDropdown from '../../components/Base/BaseDropdown.vue';
  import BaseButton from '../../components/Base/BaseButton.vue';
  import BaseInput from '../../components/Base/BaseInput.vue';

  const options = ['a', 'b'];
</script>

<template>
  <div class="item-panel-navbar">
    <BaseDropdown
      dropdown-label="MOD"
      :options="options"
      :callback="() => {}"
    ></BaseDropdown>

    <BaseInput input-label="Filter"></BaseInput>

    <BaseButton button-name="ADD CUSTOM"></BaseButton>
  </div>
</template>

<style lang="postcss">
  .item-panel-navbar {
    display: flex;
    column-gap: 24px;
  }
</style>

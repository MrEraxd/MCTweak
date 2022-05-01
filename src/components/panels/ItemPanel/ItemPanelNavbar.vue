<script setup lang="ts">
  import BaseDropdown from '../../Base/BaseDropdown.vue';
  import BaseButton from '../../Base/BaseButton.vue';
  import BaseInput from '../../Base/BaseInput.vue';
  import { useItemPanelStore } from '../../../stores/ItemPanelStore';

  const itemPanelStore = useItemPanelStore();

  const options = ['a', 'b'];

  const updateSearchValueFromInput = (newValue: string) => {
    itemPanelStore.searchString = newValue;
  };
</script>

<template>
  <div class="item-panel-navbar">
    <BaseDropdown
      dropdown-label="MOD"
      :options="options"
      :callback="() => {}"
    ></BaseDropdown>

    <BaseInput
      input-label="Filter"
      :callback="updateSearchValueFromInput"
      :default-value="itemPanelStore.searchString"
    ></BaseInput>

    <BaseButton button-name="ADD CUSTOM"></BaseButton>
  </div>
</template>

<style lang="postcss">
  .item-panel-navbar {
    display: flex;
    column-gap: 24px;
  }
</style>

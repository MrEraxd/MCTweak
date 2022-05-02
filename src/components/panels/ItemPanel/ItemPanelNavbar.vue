<script setup lang="ts">
  import BaseDropdown from '@base/BaseDropdown.vue';
  import BaseButton from '@base/BaseButton.vue';
  import BaseInput from '@base/BaseInput.vue';
  import { useItemPanelStore } from '../../../stores/ItemPanelStore';

  const itemPanelStore = useItemPanelStore();

  const options = await itemPanelStore.getAvailableModIds();

  const updateSearchValueFromInput = (newValue: string) => {
    itemPanelStore.searchString = newValue;
  };

  const changeLoadedItems = (modId: string) => {
    itemPanelStore.loadItemsByModId(modId);
  };
</script>

<template>
  <div class="item-panel-navbar">
    <Suspense>
      <BaseDropdown
        dropdown-label="MOD"
        :options="options"
        :callback="changeLoadedItems"
      ></BaseDropdown>
    </Suspense>

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

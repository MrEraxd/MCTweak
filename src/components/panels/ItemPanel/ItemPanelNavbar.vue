<script setup lang="ts">
  import BaseDropdown from '@base/BaseDropdown.vue';
  import BaseButton from '@base/BaseButton.vue';
  import BaseInput from '@base/BaseInput.vue';
  import { useItemPanelStore } from '@stores/ItemPanelStore';
  import { IBaseDropdownOption } from '@types';

  const itemPanelStore = useItemPanelStore();

  const availableItemsList = await itemPanelStore.getAvailableItemLists();
  const options: Array<IBaseDropdownOption> = [];

  availableItemsList.forEach((option: string) => {
    options.push({
      value: option,
      label: option,
    });
  });

  const updateSearchValueFromInput = (newValue: string) => {
    itemPanelStore.searchString = newValue;
  };

  const changeLoadedItems = (modName: string) => {
    itemPanelStore.loadItemsByModName(modName);
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

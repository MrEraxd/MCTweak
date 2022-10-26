<script setup lang="ts">
  import BaseDropdown from '@base/BaseDropdown.vue';
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

  options.sort((a: any) => {
    return a.value === 'minecraft' ? -1 : 0;
  });

  const updateSearchValueFromInput = (newValue: string) => {
    itemPanelStore.searchString = newValue;
  };

  const changeLoadedItems = (modName: string) => {
    itemPanelStore.loadItemsByModName(modName);
  };

  changeLoadedItems(options[0].value);
</script>

<template>
  <div class="item-panel-navbar">
    <Suspense>
      <BaseDropdown
        dropdown-label="MOD"
        :options="options"
        :callback="changeLoadedItems"
      />
    </Suspense>

    <BaseInput
      input-label="Filter"
      :callback="updateSearchValueFromInput"
      :default-value="itemPanelStore.searchString"
    />
  </div>
</template>

<style lang="postcss">
  .item-panel-navbar {
    display: flex;
    column-gap: 24px;
  }
</style>

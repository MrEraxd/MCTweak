<script setup lang="ts">
  import BaseDropdown from '@base/BaseDropdown.vue';
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';
  import { IBaseDropdownOption } from '@types';

  const craftingPanelStore = useCraftingPanelStore();

  const availableCraftings = await craftingPanelStore.getAvailableCraftings();
  const options: Array<IBaseDropdownOption> = [];

  availableCraftings.forEach((option: any) => {
    options.push({
      value: option.name,
      label: option.displayName,
    });
  });

  options.sort((a: IBaseDropdownOption) => {
    return a.value === 'vanilla_crafting' ? -1 : 0;
  });

  const changeLoadedCrafting = (name: string) => {
    craftingPanelStore.loadCraftingByName(name);
  };

  changeLoadedCrafting(options[0].value);
</script>

<template>
  <div class="crafting-panel-navbar">
    <Suspense>
      <BaseDropdown
        :options="options"
        :callback="changeLoadedCrafting"
        dropdown-label="crafting name"
      />
    </Suspense>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-navbar {
    display: flex;
    column-gap: 24px;
  }
</style>

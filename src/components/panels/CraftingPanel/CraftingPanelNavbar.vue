<script setup lang="ts">
  import BaseDropdown from '@base/BaseDropdown.vue';
  import BaseButton from '@base/BaseButton.vue';
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';

  const craftingPanelStore = useCraftingPanelStore();

  const options = await craftingPanelStore.getAvailableCraftings();

  options.forEach((option: any) => {
    delete Object.assign(option, { value: option['name'] })['name'];

    delete Object.assign(option, {
      label: option['displayName'],
    })['displayName'];
  });

  const changeLoadedCrafting = (name: string) => {
    craftingPanelStore.loadCraftingByName(name);
  };
</script>

<template>
  <div class="crafting-panel-navbar">
    <Suspense>
      <BaseDropdown
        :options="options"
        :callback="changeLoadedCrafting"
        dropdown-label="crafting name"
      ></BaseDropdown>
    </Suspense>

    <BaseButton button-name="Add custom"></BaseButton>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-navbar {
    display: flex;
    column-gap: 24px;
  }
</style>

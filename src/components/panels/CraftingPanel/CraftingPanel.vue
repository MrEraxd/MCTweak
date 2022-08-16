<script setup lang="ts">
  import CraftingPanelNavbar from './CraftingPanelNavbar.vue';
  import CraftingPanelCanvas from './CraftingPanelCanvas.vue';
  import CraftingPanelOptions from './CraftingPanelOptions.vue';
  import CraftingPanelBottomSlots from './CraftingPanelBottomSlots.vue';
  import CraftingPanelSaveRecipe from './CraftingPanelSaveRecipe.vue';
</script>

<template>
  <div class="crafting-panel">
    <Suspense>
      <CraftingPanelNavbar></CraftingPanelNavbar>
    </Suspense>

    <div class="crafting-panel__middle-bar">
      <CraftingPanelCanvas></CraftingPanelCanvas>
      <CraftingPanelOptions></CraftingPanelOptions>
    </div>

    <CraftingPanelBottomSlots></CraftingPanelBottomSlots>
    <CraftingPanelSaveRecipe></CraftingPanelSaveRecipe>
  </div>
</template>

<style lang="postcss">
  .crafting-panel {
    height: 100%;
    display: flex;
    flex-flow: column;
    row-gap: 32px;

    &__middle-bar {
      display: flex;
      column-gap: 32px;
    }
  }
</style>

<script setup lang="ts">
  import SwappablePanelSwitch from './SwappablePanelSwitch.vue';
  import CraftingPanel from './CraftingPanel/CraftingPanel.vue';
  import SavedRecipesPanel from './SavedRecipesPanel/SavedRecipesPanel.vue';

  let activePanel = 'SavedRecipesPanel';
</script>

<template>
  <div class="swappable-panel">
    <SwappablePanelSwitch :active-panel="activePanel"></SwappablePanelSwitch>

    <CraftingPanel v-show="activePanel === 'CraftingPanel'"></CraftingPanel>

    <SavedRecipesPanel
      v-show="activePanel === 'SavedRecipesPanel'"
    ></SavedRecipesPanel>
  </div>
</template>

<style lang="postcss">
  .swappable-panel {
    display: flex;
  }
</style>

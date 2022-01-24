<script setup lang="ts">
  import SwappablePanelSwitch from './SwappablePanelSwitch.vue';
  import CraftingPanel from './CraftingPanel/CraftingPanel.vue';
  import SavedRecipesPanel from './SavedRecipesPanel/SavedRecipesPanel.vue';
  import { ref } from 'vue';

  let activePanel = ref('CraftingPanel');

  function toggleActivePanel(newPanelName: string) {
    activePanel.value = newPanelName;
  }
</script>

<template>
  <div class="swappable-panel">
    <SwappablePanelSwitch
      :active-panel="activePanel"
      @toggle-active-panel="toggleActivePanel"
    ></SwappablePanelSwitch>

    <CraftingPanel v-show="activePanel === 'CraftingPanel'"></CraftingPanel>

    <SavedRecipesPanel
      v-show="activePanel === 'SavedRecipesPanel'"
    ></SavedRecipesPanel>
  </div>
</template>

<style lang="postcss">
  .swappable-panel {
    display: flex;
    column-gap: 28px;
  }
</style>

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

    <div class="swappable-panel__panels-wrapper">
      <Transition>
        <CraftingPanel v-show="activePanel === 'CraftingPanel'"></CraftingPanel>
      </Transition>

      <Transition name="">
        <SavedRecipesPanel
          v-show="activePanel === 'SavedRecipesPanel'"
        ></SavedRecipesPanel>
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss">
  .swappable-panel {
    display: flex;
    column-gap: 28px;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.35s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .swappable-panel__panels-wrapper {
    position: relative;
    width: 812px;
  }
</style>

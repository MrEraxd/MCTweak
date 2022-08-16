<script setup lang="ts">
  import CraftingPanelOptionsPanelSwitch from './CraftingPanelOptionsPanelSwitch.vue';
  import CraftingPanelSlotOptions from './CraftingPanelSlotOptions.vue';
  import CraftingPanelRecipeOptions from './CraftingPanelRecipeOptions.vue';
  import { ref } from 'vue';

  const activePanel = ref('SlotOptions');

  function toggleActivePanel(newPanelName: string) {
    activePanel.value = newPanelName;
  }
</script>

<template>
  <div class="crafting-panel-options">
    <CraftingPanelOptionsPanelSwitch
      :active-panel="activePanel"
      @toggle-active-panel="toggleActivePanel"
    ></CraftingPanelOptionsPanelSwitch>

    <div class="crafting-panel-options__swappable-panel">
      <Transition>
        <CraftingPanelSlotOptions
          v-show="activePanel === 'SlotOptions'"
        ></CraftingPanelSlotOptions>
      </Transition>

      <Transition>
        <CraftingPanelRecipeOptions
          v-show="activePanel === 'RecipeOptions'"
        ></CraftingPanelRecipeOptions>
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-options {
    display: flex;
    flex: 1;
    flex-flow: column;

    &__swappable-panel {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: auto;
      max-height: 345px;
    }
  }
</style>

<script setup lang="ts">
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';
  import BaseCraftingCell from '@base/BaseCraftingCell.vue';

  const craftingPanelStore = useCraftingPanelStore();
</script>

<template>
  <div
    v-if="craftingPanelStore.loadedCrafting.canvas?.bottomSlots"
    class="crafting-panel-bottom-slots"
  >
    <div
      class="crafting-panel-bottom-slots__title headline headline--6 headline--upper"
    >
      {{ craftingPanelStore.loadedCrafting.canvas.bottomTitle }}
    </div>
    <div class="crafting-panel-bottom-slots__cells-wrapper">
      <BaseCraftingCell
        v-for="item in craftingPanelStore.loadedCrafting.canvas?.bottomSlots"
        :key="item.syntaxName"
        :cell-info="item"
      ></BaseCraftingCell>
    </div>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-bottom-slots {
    &__title {
      margin-bottom: 12px;
    }

    &__cells-wrapper {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 20px;

      .base-crafting-cell {
        aspect-ratio: 1;
      }
    }
  }
</style>

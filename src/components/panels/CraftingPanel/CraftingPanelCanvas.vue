<script setup lang="ts">
  import BaseCraftingCell from '@base/BaseCraftingCell.vue';

  import { useCraftingPanelStore } from '@stores/craftingPanelStore';

  const craftingPanelStore = useCraftingPanelStore();
</script>

<template>
  <div class="crafting-panel-canvas">
    <BaseCraftingCell
      v-for="item in craftingPanelStore.loadedCrafting.canvas?.slots"
      :key="item.syntaxName"
      :cell-info="item"
    />
  </div>
</template>

<style lang="postcss">
  .crafting-panel-canvas {
    width: 390px;
    aspect-ratio: 1;
    border-radius: 4px;
    position: relative;
    background-color: v-bind(
      'craftingPanelStore.loadedCrafting?.canvas?.style?.backgroundColor ?? "hsl(var(--color-cc-black))"'
    );
    border: 1px solid hsl(var(--color-cc-grey-40));
  }
</style>

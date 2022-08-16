<script setup lang="ts">
  import { ref } from 'vue';
  import { IBaseCraftingCell, Item } from '@types';
  import { useCraftingPanelStore } from '@stores/craftingPanelStore';

  const props = defineProps<{
    cellInfo: IBaseCraftingCell;
  }>();

  const craftingPanelStore = useCraftingPanelStore();

  const cell = ref(props.cellInfo);

  const onDrop = (e: DragEvent) => {
    try {
      cell.value.item = JSON.parse(
        e.dataTransfer?.getData('cell') || ''
      ) as Item;
    } catch (err) {
      console.error('Invalid JSON data on drop');
      return;
    }
  };

  const changeActiveSlotPreview = () => {
    craftingPanelStore.loadedCrafting.activeSlotPreview = cell.value;
  };
</script>

<template>
  <div
    class="base-crafting-cell"
    :class="{
      active: craftingPanelStore.loadedCrafting.activeSlotPreview == cell,
    }"
    @drop="onDrop($event)"
    @dragenter.prevent
    @dragover.prevent
    @contextmenu.prevent
    @click="changeActiveSlotPreview"
  >
    <div class="base-item-cell__content">
      {{ cell.item?.displayName }}
    </div>
  </div>
</template>

<style lang="postcss">
  .base-crafting-cell {
    display: flex;
    width: v-bind('cell.style?.width');
    height: v-bind('cell.style?.height');
    position: v-bind('cell.style?.position');
    left: v-bind('cell.style?.left');
    top: v-bind('cell.style?.top');
    background-color: hsl(var(--color-cc-black));
    border-radius: v-bind('cell.style?.borderRadius');
    outline: 1px solid transparent;
    outline-color: v-bind('cell.style?.outlineColor');
    transition: outline-color 0.2s;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    z-index: 2;

    &:hover {
      outline-color: hsl(var(--color-cc-blue-30)) !important;
      cursor: pointer;
    }

    &.active {
      outline-color: hsl(var(--color-cc-blue-50)) !important;
    }
  }
</style>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IBaseCraftingCell, Item } from '@types';

  const props = defineProps<{
    cellInfo: IBaseCraftingCell;
  }>();

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
</script>

<template>
  <div
    class="base-crafting-cell"
    @drop="onDrop($event)"
    @dragenter.prevent
    @dragover.prevent
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
    position: absolute;
    left: v-bind('cell.style?.left');
    top: v-bind('cell.style?.top');
    background-color: hsl(var(--color-cc-black));
    border-radius: v-bind('cell.style?.borderRadius');
    transition: outline-color 0.2s;
    outline: 1px solid transparent;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
    z-index: 2;

    &:hover {
      outline-color: hsl(var(--color-cc-blue-50)) !important;
      cursor: pointer;
    }
  }
</style>

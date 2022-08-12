<script setup lang="ts">
  import { IBaseItemCell } from '@types';

  const props = withDefaults(defineProps<IBaseItemCell>(), {
    displayName: '',
  });

  const startDrag = (e: DragEvent, cell: IBaseItemCell) => {
    if (e.dataTransfer === null) return;

    e.dataTransfer.dropEffect = 'copy';
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('cell', JSON.stringify(cell));
  };
</script>

<template>
  <div
    class="base-item-cell"
    draggable="true"
    @dragstart="startDrag($event, props)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div class="base-item-cell__content">{{ props.displayName }}</div>
  </div>
</template>

<style lang="postcss">
  .base-item-cell {
    display: flex;
    width: 100%;
    aspect-ratio: 1;
    background-color: hsl(var(--color-cc-black));
    transition: outline-color 0.2s;
    outline: 1px solid transparent;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 10px;
    text-align: center;

    &:hover {
      outline-color: hsl(var(--color-cc-blue-50)) !important;
      cursor: pointer;
    }
  }
</style>

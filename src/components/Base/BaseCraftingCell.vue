<script setup lang="ts">
  import { ref } from 'vue';

  interface IBaseCraftingCell {
    displayName: string;
  }

  const cell = ref({
    displayName: '',
  });

  const onDrop = (e: DragEvent) => {
    try {
      cell.value = JSON.parse(
        e.dataTransfer?.getData('cell') || ''
      ) as IBaseCraftingCell;
    } catch (err) {
      console.error(err);
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
    <div class="base-item-cell__content">{{ cell.displayName }}</div>
  </div>
</template>

<style lang="postcss">
  .base-crafting-cell {
    display: flex;
    width: 100%;
    aspect-ratio: 1;
    background-color: hsl(var(--color-cc-black));
    transition: outline-color 0.2s;
    outline: 1px solid transparent;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: 14px;
    text-align: center;

    &:hover {
      outline-color: hsl(var(--color-cc-blue-50)) !important;
      cursor: pointer;
    }
  }
</style>

<script setup lang="ts">
  import BaseItemCell from '@base/BaseItemCell.vue';
  import { useItemPanelStore } from '@store/ItemPanelStore';

  const itemPanelStore = useItemPanelStore();

  itemPanelStore.getItemsByModId();
</script>

<template>
  <div class="item-panel-list">
    <div class="item-panel-list__list">
      <BaseItemCell
        v-for="item in itemPanelStore.loadedItems"
        v-show="!item.displayName.search(itemPanelStore.searchString)"
        :key="item.id"
        :display-name="item.displayName"
      ></BaseItemCell>
    </div>
  </div>
</template>

<style lang="postcss">
  .item-panel-list {
    height: 100%;
    overflow-y: auto;
    flex: 1;
    padding: 2px;

    &__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 0.7fr));
      gap: 24px;
      padding-right: 16px;

      .base-item-cell {
        outline-color: hsl(var(--color-cc-grey-40));
        border-radius: 4px;
      }
    }
  }
</style>

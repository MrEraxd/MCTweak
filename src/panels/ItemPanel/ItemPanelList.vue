<script setup lang="ts">
  import BaseItemCell from '../../components/Base/BaseItemCell.vue';
</script>

<template>
  <div class="item-panel-list">
    <div class="item-panel-list__list">
      <BaseItemCell
        v-for="item in [...Array(600).keys()]"
        :key="item"
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

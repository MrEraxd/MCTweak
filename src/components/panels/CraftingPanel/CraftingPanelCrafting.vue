<script setup lang="ts">
  import BaseCraftingCell from '@base/BaseCraftingCell.vue';
</script>

<template>
  <div class="crafting-panel-crafting">
    <BaseCraftingCell
      v-for="item in [...Array(9).keys()]"
      :key="item"
    ></BaseCraftingCell>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-crafting {
    width: 480px;
    aspect-ratio: 1;
    background-color: hsl(var(--color-cc-grey-40));
    border-radius: 4px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    padding: 1px;
    overflow: hidden;
  }
</style>

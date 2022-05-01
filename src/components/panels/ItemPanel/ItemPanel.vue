<script setup lang="ts">
  import ItemPanelNavbar from './ItemPanelNavbar.vue';
  import ItemPanelList from './ItemPanelList.vue';
</script>

<template>
  <div class="item-panel">
    <ItemPanelNavbar></ItemPanelNavbar>

    <ItemPanelList></ItemPanelList>
  </div>
</template>

<style lang="postcss">
  .item-panel {
    flex: 1;
    display: flex;
    flex-flow: column;
    row-gap: 32px;
  }
</style>

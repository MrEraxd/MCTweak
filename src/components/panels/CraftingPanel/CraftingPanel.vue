<script setup lang="ts">
  import CraftingPanelNavbar from './CraftingPanelNavbar.vue';
  import CraftingPanelCrafting from './CraftingPanelCrafting.vue';
</script>

<template>
  <div class="crafting-panel">
    <CraftingPanelNavbar></CraftingPanelNavbar>

    <CraftingPanelCrafting></CraftingPanelCrafting>
  </div>
</template>

<style lang="postcss">
  .crafting-panel {
    height: 100%;
    display: flex;
    flex-flow: column;
    row-gap: 32px;
  }
</style>

<script setup lang="ts">
  import CraftingPanelNavbar from './CraftingPanelNavbar.vue';
  import CraftingPanelCanvas from './CraftingPanelCanvas.vue';
</script>

<template>
  <div class="crafting-panel">
    <Suspense>
      <CraftingPanelNavbar></CraftingPanelNavbar>
    </Suspense>

    <CraftingPanelCanvas></CraftingPanelCanvas>
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

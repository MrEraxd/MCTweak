<script setup lang="ts">
  import CraftingPanelOptionsNavbar from './CraftingPanelOptionsNavbar.vue';
</script>

<template>
  <div class="crafting-panel-options">
    <CraftingPanelOptionsNavbar></CraftingPanelOptionsNavbar>

    <div class="crafting-panel-options__swappable-panel">
      <Transition></Transition>
      <Transition></Transition>
    </div>
  </div>
</template>

<style lang="postcss">
  .crafting-panel-options {
    display: flex;
    flex: 1;
    flex-flow: column;

    &__swappable-panel {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
</style>

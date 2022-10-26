<script setup lang="ts">
  import SavedRecipesPanelNavbar from './SavedRecipesPanelNavbar.vue';
  import SaveRecipesPanelList from './SaveRecipesPanelList.vue';
</script>

<template>
  <div class="saved-recipes-panel">
    <SavedRecipesPanelNavbar />
    <SaveRecipesPanelList />
  </div>
</template>

<style lang="postcss">
  .saved-recipes-panel {
    display: flex;
    flex-flow: column;
    row-gap: 32px;
    height: 100%;
  }
</style>

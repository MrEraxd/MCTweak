<script setup lang="ts">
  import BaseInput from '@base/BaseInput.vue';
  import BaseButton from '@base/BaseButton.vue';
  import { useSavedRecipesPanelStore } from '@stores/SavedRecipesPanelStore';

  const savedRecipesPanelStore = useSavedRecipesPanelStore();

  const updateSearchValueFromInput = (newValue: string) => {
    savedRecipesPanelStore.searchString = newValue;
  };

  const removeSavedRecipesButtonHandler = () => {
    savedRecipesPanelStore.removeSavedRecipes();
  };
</script>

<template>
  <div class="saved-recipes-panel-navbar">
    <BaseInput input-label="Search" :callback="updateSearchValueFromInput" />
    <BaseButton button-name="IMPORT" />
    <BaseButton button-name="EXPORT" />
    <BaseButton
      button-name="RESET"
      :is-error-button="true"
      @click="removeSavedRecipesButtonHandler"
    />
  </div>
</template>

<style lang="postcss">
  .saved-recipes-panel-navbar {
    display: flex;
    column-gap: 24px;

    .base-button:last-of-type {
      margin-left: auto;
    }
  }
</style>

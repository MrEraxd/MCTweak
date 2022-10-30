<script setup lang="ts">
  import BaseInput from '@base/BaseInput.vue';
  import BaseButton from '@base/BaseButton.vue';
  import { useSavedRecipesPanelStore } from '@stores/SavedRecipesPanelStore';
  import { useModalStore } from '@stores/modalStore';
  import { useOverlayStore } from '@stores/overlayStore';
  import { ModalTypes } from '@types';

  const savedRecipesPanelStore = useSavedRecipesPanelStore();
  const modalStore = useModalStore();
  const overlayStore = useOverlayStore();

  const updateSearchValueFromInput = (newValue: string) => {
    savedRecipesPanelStore.searchString = newValue;
  };

  const exportRecipesButtonHandler = () => {
    modalStore.changeOpenedModal(ModalTypes.EXPORT_RECIPE_MODAL);
    overlayStore.showOverlay();
    modalStore.showModal();
    modalStore.changeModalTitle('EXPORT');
  };

  const removeSavedRecipesButtonHandler = () => {
    modalStore.changeOpenedModal(ModalTypes.RESET_SAVED_RECIPES_MODAL);
    overlayStore.showOverlay();
    modalStore.showModal();
    modalStore.changeModalTitle('RESET');
  };
</script>

<template>
  <div class="saved-recipes-panel-navbar">
    <BaseInput input-label="Search" :callback="updateSearchValueFromInput" />
    <BaseButton button-name="IMPORT" />
    <BaseButton button-name="EXPORT" @click="exportRecipesButtonHandler" />
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

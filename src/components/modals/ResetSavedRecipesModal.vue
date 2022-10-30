<script setup lang="ts">
  import { useModalStore } from '@stores/modalStore';
  import { useNotificationStore } from '@stores/notificationStore';
  import { useOverlayStore } from '@stores/overlayStore';
  import { useSavedRecipesPanelStore } from '@stores/savedRecipesPanelStore';
  import { NotificationTypes } from '@types';

  const savedRecipesStore = useSavedRecipesPanelStore();
  const modalStore = useModalStore();
  const overlayStore = useOverlayStore();
  const notificationStore = useNotificationStore();

  const resetSavedRecipesButtonHandler = () => {
    savedRecipesStore.removeSavedRecipes();
    modalStore.hideModal();
    overlayStore.hideOverlay();
    notificationStore.addNotification(
      'Items reseted',
      NotificationTypes.SUCCESS,
      'Items succesfully reseted'
    );
  };
</script>

<template>
  <div class="reset-saved-recipes-modal">
    <p class="reset-saved-recipes-modal__warn">
      Are you sure? This will delete all saved recipes.
    </p>
    <BaseButton
      button-name="Confirm"
      :is-error-button="true"
      @click="resetSavedRecipesButtonHandler"
    />
  </div>
</template>

<style lang="postcss">
  .reset-saved-recipes-modal {
    display: flex;
    row-gap: 24px;
    flex-flow: column;
    align-items: flex-start;

    &__warn {
      max-width: 80%;
    }
  }
</style>

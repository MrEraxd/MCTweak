<script setup lang="ts">
  import { useModalStore } from '@stores/modalStore';
  import { useOverlayStore } from '@stores/overlayStore';
  import TheModal from './TheModal.vue';
  import TheNotifications from './TheNotifications.vue';

  const overlayStore = useOverlayStore();
  const modalStore = useModalStore();

  const handleOverlayBackgroundClick = () => {
    overlayStore.hideOverlay();
    modalStore.hideModal();
  };
</script>

<template>
  <div
    id="overlay"
    class="overlay"
    :class="{
      'overlay--visible': overlayStore.overlayVisible,
    }"
  >
    <div class="overlay__container" @click.self="handleOverlayBackgroundClick">
      <TheModal />
      <TheNotifications />
    </div>
  </div>
</template>

<style lang="postcss">
  .overlay {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    pointer-events: none;
    transition: background-color 0.5s;

    &--visible {
      pointer-events: all;
      background-color: hsl(var(--color-cc-black), 0.7);
    }

    &__container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>

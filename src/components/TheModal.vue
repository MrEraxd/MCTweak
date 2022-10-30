<template>
  <div
    id="modal"
    class="modal"
    :class="{
      'modal--visible': modalStore.modalVisible,
    }"
  >
    <div class="modal__top-bar">
      <div class="modal__title">{{ modalStore.modalTitle }}</div>
      <div class="modal__close"></div>
    </div>

    <div class="modal__content">
      <component :is="asyncComponents[modalStore.openedModal]" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useModalStore } from '@stores/modalStore';
  import { ModalTypes } from '@types';
  import { defineAsyncComponent } from 'vue';

  const modalStore = useModalStore();

  const asyncComponents: any = {};

  // Defines all modal contents that are in enum
  Object.keys(ModalTypes).forEach((key) => {
    asyncComponents[ModalTypes[key as keyof typeof ModalTypes]] =
      defineAsyncComponent({
        loader: () =>
          import(`./modals/${ModalTypes[key as keyof typeof ModalTypes]}.vue`),
      });
  });
</script>

<style lang="postcss">
  .modal {
    z-index: 2;
    position: absolute;
    background-color: hsl(var(--color-cc-black));
    border: 1px solid hsl(var(--color-cc-grey-40));
    border-radius: 2px;
    padding: 28px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;

    &--visible {
      opacity: 1;
      pointer-events: all;
    }

    &__top-bar {
      margin-bottom: 24px;
    }
  }
</style>

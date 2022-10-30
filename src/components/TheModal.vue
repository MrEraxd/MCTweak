<script setup lang="ts">
  import { useModalStore } from '@stores/modalStore';
  import { ModalTypes } from '@types';
  import { defineAsyncComponent } from 'vue';
  import IconExit from '@svg/icon-exit.svg?component';
  import { useOverlayStore } from '@stores/overlayStore';

  const modalStore = useModalStore();
  const overlayStore = useOverlayStore();

  const asyncComponents: any = {};

  // Defines all modal contents that are in enum
  Object.keys(ModalTypes).forEach((key) => {
    asyncComponents[ModalTypes[key as keyof typeof ModalTypes]] =
      defineAsyncComponent({
        loader: () =>
          import(`./modals/${ModalTypes[key as keyof typeof ModalTypes]}.vue`),
      });
  });

  const closeModalButtonHandler = () => {
    overlayStore.hideOverlay();
    modalStore.hideModal();
  };
</script>

<template>
  <div
    id="modal"
    class="modal"
    :class="{
      'modal--visible': modalStore.modalVisible,
    }"
  >
    <div class="modal__top-bar">
      <div class="modal__title headline headline--5">
        {{ modalStore.modalTitle }}
      </div>
      <div class="modal__close" @click="closeModalButtonHandler">
        <IconExit />
      </div>
    </div>

    <div class="modal__content">
      <KeepAlive>
        <component :is="asyncComponents[modalStore.openedModal]"
      /></KeepAlive>
    </div>
  </div>
</template>

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
      display: flex;
      justify-content: space-between;
      column-gap: 240px;
    }

    &__close {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }

      svg {
        path {
          stroke: hsl(var(--color-cc-grey-30));
        }
      }
    }
  }
</style>

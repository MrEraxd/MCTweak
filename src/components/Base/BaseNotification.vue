<script setup lang="ts">
  import { useNotificationStore } from '@stores/notificationStore';
  import { IBaseNotification, NotificationTypes } from '@types';
  import { ref } from 'vue';
  import IconError from '@svg/icon-error.svg?component';
  import IconWarn from '@svg/icon-warn.svg?component';
  import IconComplete from '@svg/icon-complete.svg?component';
  import IconExit from '@svg/icon-exit.svg?component';

  const notificationStore = useNotificationStore();

  const props = withDefaults(defineProps<IBaseNotification>(), {
    text: 'PLACEHOLDER',
    ttl: 3000,
  });

  const notification = ref();

  const timeout = setTimeout(() => {
    fadeNotification();
    setTimeout(() => {
      notificationStore.removeNotificationByUuid(props.uuid);
    }, 300);
  }, props.ttl);

  const closeNotificationButtonHandler = () => {
    clearTimeout(timeout);
    fadeNotification();
    setTimeout(() => {
      notificationStore.removeNotificationByUuid(props.uuid);
    }, 300);
  };

  function fadeNotification() {
    notification.value.animate([{ opacity: 1 }, { opacity: 0 }], {
      fill: 'forwards',
      easing: 'ease-in-out',
      duration: 300,
    });
  }
</script>

<template>
  <div
    ref="notification"
    class="base-notification"
    :class="`base-notification--${props.type}`"
  >
    <div class="base-notification__icon">
      <IconError v-if="props.type === NotificationTypes.ERROR" />
      <IconComplete v-else-if="props.type === NotificationTypes.SUCCESS" />
      <IconWarn v-else />
    </div>
    <div class="base-notification__content">
      <div class="base-notification__top-bar">
        <div class="base-notification__title subtitle subtitle--1">
          {{ props.title }}
        </div>
        <button
          class="base-notification__exit"
          @click="closeNotificationButtonHandler"
        >
          <IconExit />
        </button>
      </div>

      <div
        v-if="props.desc"
        class="base-notification__desc body-txt body-txt--2"
      >
        {{ props.desc }}
      </div>
    </div>
    <div class="base-notification__timer"></div>
  </div>
</template>

<style lang="postcss">
  .base-notification {
    position: relative;
    background-color: hsl(var(--color-cc-grey-60));
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 12px;
    display: flex;
    column-gap: 12px;
    pointer-events: all;
    width: 300px;
    overflow: hidden;

    &--success {
      --theme-color: var(--color-cc-green-30);
      --theme-color-darker: var(--color-cc-green-70);
    }

    &--error {
      --theme-color: var(--color-cc-red-30);
      --theme-color-darker: var(--color-cc-red-70);
    }

    &--warn {
      --theme-color: var(--color-cc-yellow-30);
      --theme-color-darker: var(--color-cc-yellow-70);
    }

    &__top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__exit {
      background-color: transparent;
      border: none;
      outline: none;

      &:hover {
        cursor: pointer;
      }

      path {
        stroke: hsl(var(--color-cc-white));
      }
    }

    &__content {
      display: flex;
      flex-flow: column;
      row-gap: 14px;
      width: 100%;
    }

    &__timer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: hsl(var(--theme-color-darker));

      &::after {
        content: '';
        display: flex;
        width: 100%;
        height: 100%;
        background-color: hsl(var(--theme-color));
        border-bottom-left-radius: 4px;
        animation: unloading v-bind('props.ttl + "ms"') linear forwards;

        @keyframes unloading {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
      }
    }

    &__desc {
      opacity: 0.56;
      padding-right: 32px;
      margin-bottom: 4px;
    }
  }
</style>

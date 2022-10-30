<script setup lang="ts">
  import BaseNotification from '@base/BaseNotification.vue';
  import { useNotificationStore } from '@stores/notificationStore';

  const notificationStore = useNotificationStore();
</script>

<template>
  <div class="notifications">
    <div class="notifications__list">
      <BaseNotification
        v-for="notification in notificationStore.notifications"
        :key="notification.uuid"
        :title="notification.title"
        :desc="notification.desc"
        :type="notification.type"
        :ttl="notification.ttl"
        :uuid="notification.uuid"
      />
    </div>
  </div>
</template>

<style lang="postcss">
  .notifications {
    position: absolute;
    right: 24px;
    top: 24px;
    pointer-events: none;

    &__list {
      display: flex;
      flex-flow: column;
      row-gap: 16px;
    }
  }
</style>

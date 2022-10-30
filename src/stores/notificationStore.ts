import { IBaseNotification } from '@types';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useNotificationStore = defineStore('NotificationStore', {
  state: () => {
    return {
      notifications: <IBaseNotification[]>[],
    };
  },
  actions: {
    addNotification(title: string, type: string, desc = '', ttl = 3000) {
      this.notifications.unshift({
        title: title,
        desc: desc,
        type: type,
        ttl: ttl,
        uuid: uuidv4(),
      });
    },
    removeNotificationByUuid(uuidToRemove: string) {
      this.notifications = this.notifications.filter((notification) => {
        return notification.uuid !== uuidToRemove;
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useNotificationStore, import.meta.hot)
  );
}

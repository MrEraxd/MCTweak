import { defineStore, acceptHMRUpdate } from 'pinia';

export const useOverlayStore = defineStore('OverlayStore', {
  state: () => {
    return {
      overlayVisible: false,
    };
  },
  actions: {
    hideOverlay() {
      this.overlayVisible = false;
    },
    showOverlay() {
      this.overlayVisible = true;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOverlayStore, import.meta.hot));
}

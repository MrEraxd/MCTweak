import { defineStore, acceptHMRUpdate } from 'pinia';

export const useModalStore = defineStore('ModalStore', {
  state: () => {
    return {
      openedModal: '',
      modalVisible: false,
      modalTitle: '',
    };
  },
  actions: {
    changeOpenedModal(newModalName: string) {
      this.openedModal = newModalName;
    },
    changeModalTitle(newModalTitle: string) {
      this.modalTitle = newModalTitle;
    },
    hideModal() {
      this.modalVisible = false;
    },
    showModal() {
      this.modalVisible = true;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot));
}

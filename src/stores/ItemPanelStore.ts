import { defineStore } from 'pinia';
import { getData } from '@plugins/dbConnection';
import allItemsQuery from '../graphql/allItems.query.gql';

interface IItem {
  id: string;
  displayName: string;
}

export const useItemPanelStore = defineStore('ItemPanelStore', {
  state: () => {
    return {
      searchString: '',
      loadedItems: <IItem[]>[],
    };
  },
  actions: {
    getItemsByModId() {
      getData(allItemsQuery).then((res) => (this.loadedItems = res.data.items));
    },
  },
});

import { defineStore } from 'pinia';
import apolloClient from '../apollo';
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
    getItems() {
      apolloClient
        .query({
          query: allItemsQuery,
        })
        .then((data) => {
          this.loadedItems = data.data.items;
        });
    },
  },
});

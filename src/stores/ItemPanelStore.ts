import { defineStore, acceptHMRUpdate } from 'pinia';
import { queryData } from '@plugins/dbConnection';
import itemsByModNameQuery from '@graphql/itemsByModName.query.gql';
import availableItemsListQuery from '@graphql/availableItemsList.query.gql';
import { Item } from '@types';

export const useItemPanelStore = defineStore('ItemPanelStore', {
  state: () => {
    return {
      searchString: '',
      loadedItems: <Item[]>[],
      availableItemLists: [],
    };
  },
  actions: {
    async getAvailableItemLists() {
      if (this.availableItemLists.length === 0) {
        return queryData(availableItemsListQuery).then(
          (res) => (this.availableItemLists = res.data.availableItemLists)
        );
      } else {
        return this.availableItemLists;
      }
    },
    loadItemsByModName(modName: string) {
      return queryData(itemsByModNameQuery, { modName: modName }).then(
        (res) => (this.loadedItems = res.data.itemsByModName)
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useItemPanelStore, import.meta.hot));
}

import { defineStore } from 'pinia';
import { queryData } from '@plugins/dbConnection';
import itemsByModNameQuery from '@graphql/itemsByModName.query.gql';
import availableItemsListQuery from '@graphql/availableItemsList.query.gql';

interface IItem {
  id: string;
  displayName: string;
}

export const useItemPanelStore = defineStore('ItemPanelStore', {
  state: () => {
    return {
      searchString: '',
      loadedItems: <IItem[]>[],
      availableItemLists: [],
    };
  },
  actions: {
    loadItemsByModName(modName: string) {
      return queryData(itemsByModNameQuery, { modName: modName }).then(
        (res) => (this.loadedItems = res.data.itemsByModName)
      );
    },
    async getAvailableItemLists() {
      return queryData(availableItemsListQuery).then(
        (res) => (this.availableItemLists = res.data.availableItemLists)
      );
    },
  },
});

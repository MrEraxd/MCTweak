import { defineStore } from 'pinia';
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
